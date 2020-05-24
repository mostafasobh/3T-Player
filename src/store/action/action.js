import * as actionTypes from './actionTypes'
import axios from 'axios'

export const startReq=()=>{
    return{
        type:actionTypes.REQ_START
    }
}
export const reqSuccess=(original_title,overview,backdrop_path,poster_path,release_date,vote_average,tagline)=>{
    return{
        type:actionTypes.REQ_SUCCESS,
        loading:false,
        title:original_title,
         story:overview,
        img:backdrop_path,
         poster:poster_path,
         releaseDate:release_date,
         vote:vote_average,
         tagLine:tagline
    }
}

export const secReqSucces=(tagline,genres,production_companies,runtime,rev)=>{
    return{
        type:actionTypes.SEC_REQ_SUCCESS,
        tagLine:tagline,
        gener:genres,
        productionCompanies:production_companies,
        runTime:runtime,
        revenue:rev
    }
}

export const orderMovie2=(id)=>{
    return dispatch =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=686f3b54e377c347e4011e136a5b959f&language=en-US`).then(response=>{
         const tagLine=response.data.tagline
         const genres=response.data.genres.map(genr=>{
             return genr.name
         })
         const runTime=response.data.runtime
         const revenue=response.data.revenue
         const productionCompanies= response.data.production_companies.map(company=>company.name )
         dispatch(secReqSucces(tagLine,genres,productionCompanies,runTime,revenue))
     })
    }
}

export const orderMovie =(name)=>{
    return dispatch=>{
        dispatch(startReq())
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=686f3b54e377c347e4011e136a5b959f&query=${name}`).then(response=>{
            const response_path=response.data.results[0]
            const id =response.data.results[0].id
            dispatch(orderMovie2(id))
           dispatch(reqSuccess(response_path.original_title,response_path.overview,response_path.backdrop_path,response_path.poster_path,response_path.release_date,response_path.vote_average))
       })
    }
}

export const movieOptionsSuccess=(movieOptions)=>{
    return{
        type:actionTypes.ORDER_OPTIONS_SUCCESS,
        options:movieOptions
    }
}
export const orderMovieOptions=(order)=>{
    return dispatch=>{
        let movieOptions=[]
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=686f3b54e377c347e4011e136a5b959f&query=${order}`).then(response=>{
            response.data.results.map(movieName=>{
               return movieOptions.push(movieName.original_title)
            })
            dispatch(movieOptionsSuccess(movieOptions))
        })
        
    }
}

export const seriesReqSuccess=(backdrop_path,poster_path,original_name,overview,first_air_date,genres,number_of_episodes,number_of_seasons,vote_average)=>{
    return{
        type:actionTypes.SERIES_REQ_SUCCESS,
        img:backdrop_path,
        poster:poster_path,
        title:original_name,
        story:overview,
        releaseDate:first_air_date,
        gener:genres,
        seasons:number_of_seasons,
        episodes:number_of_episodes,
        vote:vote_average
    }
}

export const orderSeries=(seriesName)=>{
    return dispatch=>{
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=686f3b54e377c347e4011e136a5b959f&language=en-US&page=1&query=${seriesName}`).then(response=>{
            return response.data.results[0].id
            
        }).then(res=>{
            axios.get(`https://api.themoviedb.org/3/tv/${res}?api_key=686f3b54e377c347e4011e136a5b959f&language=en-US`).then(response=>{
                const response_path= response.data
                const genres=response_path.genres.map(gener=> gener.name)
                dispatch(seriesReqSuccess(response_path.backdrop_path,response_path.poster_path,response_path.original_name,response_path.overview,response_path.first_air_date,genres,response_path.number_of_episodes,response_path.number_of_seasons,response_path.vote_average))
            })
    
        })
}
}

export const orderSeriesOptionsSuccess=(seriesOptions)=>{
    return{
        type:actionTypes.ORDER_SERIES_OPTIONS_SUCCESS,
        options:seriesOptions
    }
}

export const orderSeriesOptions=(order)=>{
    return dispatch=>{
        let seriesOptions=[]
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=686f3b54e377c347e4011e136a5b959f&language=en-US&page=1&query=${order}`).then(response=>{
            response.data.results.map(seriesName=>{
                return seriesOptions.push(seriesName.original_name)
             })
             dispatch(orderSeriesOptionsSuccess(seriesOptions))
        })
    }
}
