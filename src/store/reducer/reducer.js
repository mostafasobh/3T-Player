import * as actionTypes from '../action/actionTypes'
const bgImgUrl=`https://image.tmdb.org/t/p/w1280/`
const posterImgUrl=`https://image.tmdb.org/t/p/w400/`
const initialState={
    options:[],
    loading:false,
    title:null,
    story:null,
    img:null,
    poster:null,
    releaseDate:null,
    vote:null,
    tagLine:null,
    genres:null,
    productionCompanies:null,
    runTime:null,
    revenue:null,
    episodes:null,
    seasons:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.REQ_START:
            return{
                ...state,
                loading:true
            }
            case actionTypes.REQ_SUCCESS:
                return{
                    ...state,
                    title:action.title,
                    story:action.story,
                    img:`${bgImgUrl}${action.img}`,
                    poster:posterImgUrl + action.poster,
                    releaseDate:action.releaseDate,
                    vote:action.vote+'/10',
                    tagLine:action.tagLine,
                    options:[]
                }
                case actionTypes.ORDER_OPTIONS_SUCCESS:
                    return{
                        ...state,
                        options:action.options.slice(0,5)
                    }
                    case actionTypes.SEC_REQ_SUCCESS:
                        return{
                            ...state,
                            tagLine:action.tagLine,
                            genres:action.gener.join(', '),
                            productionCompanies:action.productionCompanies.join(', '),
                            runTime:action.runTime,
                            revenue:parseInt(action.revenue).toLocaleString()
                        }
                        case actionTypes.SERIES_REQ_SUCCESS:
                            return{
                                ...state,
                                options:[],
                                img:`${bgImgUrl}${action.img}`,
                                poster:posterImgUrl + action.poster,
                                title:action.title,
                                story:action.story,
                                releaseDate:action.releaseDate,
                                genres:action.gener.join(', '),
                                episodes:action.episodes,
                                seasons:action.seasons,
                                vote:action.vote
                            }
                            case actionTypes.ORDER_SERIES_OPTIONS_SUCCESS:
                            return{
                                    ...state,
                                    options:action.options.slice(0,5)
                             }
                default:
    }
    return state
}

export default reducer