import React,{Component} from 'react'
import{connect} from 'react-redux'
import Input from '../../Components/input/input'
import List from '../../Components/List/list'
import Card from '../../Components/Card/Card'
import * as actions from '../../store/action/action'
import './series.css'

class Series extends Component{

    state={
        value:'',
        imgSrc:null,
        optionalValue:''
    }
componentDidMount(){
     this.props.orderSeries('The Big Bang Theory')
}

// onOrderHandler=()=>{
//     const inputVal=document.getElementsByTagName('input')[0].value
// }
onChangeNameHandler=(event)=>{
      const inputVal=document.getElementsByTagName('input')[0].value
      const optionsVal=document.getElementById('series').childNodes
   
 if(event.target.value.length >= 2){
   this.props.orderSeriesOptions(event.target.value)
 }
   for(let i=0;i<optionsVal.length;i++){
     if(optionsVal[i].value === inputVal){
       this.setState({optionalValue:optionsVal})
        this.props.orderSeries(inputVal)
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

   // will be modified soon
   onChangePageHandler=()=>{
    this.props.history.push('/movies')
  }
    render(){
        let options= this.props.options

        return(
            <div className='movieCard' style={{backgroundImage:`url(${this.props.img})`,width:'100%'}}>
            <Input tpy='text' list='series' plcH='Series-Name' change={this.onChangeNameHandler} options={options}/>
            <List idList='series' plcH='Serie-Name' options={options} />
            <Card
            title={this.props.title}
            story={this.props.story}
            genres={this.props.genres}
            releaseDate={this.props.releaseDate}
            vote={this.props.vote}
            poster={this.props.poster}
            episodes={this.props.episodes}
            seasons={this.props.seasons}
             />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      img:state.img,
      poster:state.poster,
      title:state.title,
      story:state.story,
      releaseDate:state.releaseDate,
      genres:state.genres,
      episodes:state.episodes,
      seasons:state.seasons,
      vote:state.vote,
      options:state.options
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        orderSeries:(name)=>{dispatch(actions.orderSeries(name))},
        orderSeriesOptions:(order)=>dispatch(actions.orderSeriesOptions(order))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Series)