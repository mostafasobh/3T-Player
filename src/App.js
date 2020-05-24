import React,{Component} from 'react'
import './App.css'
import {withRouter} from 'react-router'
import {Route,Switch} from 'react-router-dom'
import MoviesPage from './Containers/Movie/movie'
import SeriesPage from './Containers/series/series'

class App extends Component{

  state={
    switch:false
  }

  // componentDidMount(){
  //     this.props.history.replace('/series')
  // }
  onChangePageHandler=()=>{
    const newState=!this.state.switch
    this.setState({switch:newState})
  }
  
  render(){
   

    return(
      <div className='App'>
      <Switch>
        <Route key='movies' path='/movies' component={MoviesPage} />
        <Route key='series' path='/series' component={SeriesPage} />
      </Switch>
      </div>
    )
  }
  
}

export default withRouter(App)