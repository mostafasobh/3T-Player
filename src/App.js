import React,{Component} from 'react'
import './App.css'
import {withRouter} from 'react-router'
import {Route,Switch} from 'react-router-dom'
import MoviesPage from './Containers/Movie/movie'
import SeriesPage from './Containers/series/series'
import NavBar from './Components/Navigation/navbar/navbar'

class App extends Component{

  state={
    switch:false
  }

  seriesRouter=()=>{
    this.props.history.push('/series')
  }
  movieRouter=()=>{
    this.props.history.push('/movies')
  }
  // componentDidMount(){
  //     this.props.history.push('/series')
  // }
  onChangePageHandler=()=>{
    const newState=!this.state.switch
    this.setState({switch:newState})
  }
  
  render(){
   

    return(
      <div className='App'>
      
        <Route path='/' component={()=> <NavBar series={this.seriesRouter} movies={this.movieRouter} />} />
        <Route key='movies' path='/movies' component={()=><MoviesPage />} />
        <Route key='series' path='/series' component={SeriesPage} />

      </div>
    )
  }
  
}

export default withRouter(App)