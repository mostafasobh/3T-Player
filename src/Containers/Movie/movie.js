import React,{Component} from 'react';
import './movie.css';
import {connect} from 'react-redux'
import * as actions from '../../store/action/action'
// import Aux from './hoc/aux'
import Input from '../../Components/input/input'
import List from '../../Components/List/list'
import Card from '../../Components/Card/Card'
//
import Button from '../../Components/TempraryBtn/button'

class Movie extends Component {

  state={
      value:'',
      imgSrc:null,
      optionalValue:''
  }
  componentDidMount(){
    this.props.onWatchMovie('The Shawshank Redemption')
  }

onChangeNameHandler=(event)=>{
   const inputVal=document.getElementsByTagName('input')[0].value
   const optionsVal=document.getElementById('movies').childNodes
  
if(event.target.value.length >= 2){
  this.props.onOrderOPtions(event.target.value)
}
  for(let i=0;i<optionsVal.length;i++){
    if(optionsVal[i].value === inputVal){
      this.setState({optionalValue:optionsVal})
      this.props.onWatchMovie(inputVal)
    }
  }
  let newState=event.target.value
  this.setState({value:newState})
  }
  handleKeyPress = (event) => {
    if(this.state.optionalValue ===this.state.value){
    if(event.key === 'Enter'){
      this.props.onWatchMovie(this.state.value)
    }
  }
  }

    //will be modified soon
  onChangePageHandler=()=>{
    this.props.history.push('/series')
  }

  render(){
    
    let options= this.props.options
   

    const Moviepage=(
      <div className="movieCard" style={{backgroundImage:`url(${this.props.img})`}}>
        <Button changePage={this.onChangePageHandler} page='Move To Series'  />
      <Input tpy='text' list='movies'  plcH='Movie-Name' change={this.onChangeNameHandler}/>
      <List change={this.handleChange} idList='movies'  options={options} />
      <Card 
      title={this.props.title}
      poster={this.props.poster}
      story={this.props.story}
      releaseDate={this.props.releaseDate}
      tagLine={this.props.tagLine}
      vote={this.props.vote}
      genres={this.props.genres}
      productionCompanies={this.props.productionCompanies}
      runTime={this.props.runTime}
      revenue={this.props.revenue}
     />
   </div>
   )
  return (
        [Moviepage]
  );
}
}
const mapStateToProps=(state)=>{
  return{
    loading:state.loading,
    title:state.title,
    story:state.story,
    img:state.img,
    poster:state.poster,
    releaseDate:state.releaseDate,
    vote:state.vote,
    options:state.options,
    tagLine:state.tagLine,
    genres:state.genres,
    productionCompanies:state.productionCompanies,
    revenue:state.revenue,
    runTime:state.runTime
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onWatchMovie:(name)=>dispatch(actions.orderMovie(name)),
    onOrderOPtions:(order)=>dispatch(actions.orderMovieOptions(order))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
