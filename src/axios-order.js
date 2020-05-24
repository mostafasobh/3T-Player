import axios from 'axios'

const instance=axios.create({
    baseURL:'https://api.themoviedb.org/3/search/movie?api_key=686f3b54e377c347e4011e136a5b959f&query='
})
    
export default instance