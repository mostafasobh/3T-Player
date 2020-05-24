import React,{useState} from 'react'
import classes from './Card.module.css'

const Card=(props)=>{
    const [display,setDisplay]=useState({display:'none'})
  

        const readMore=[
              props.story ?props.story.split(' ').slice(0,50).join(' ') : null,
              <span className={classes.dots} key='span1' onClick={()=>setDisplay({display:'block'})} >ReadMore</span>,
            props.story ?<span id='span2' key='asassa' style={display}>{props.story.split(' ').slice(50,props.story.split(' ').length).join(' ')}</span> : null
        ]
    
    return(
        <div  className={props.story ?classes.Card : null}>
                                    {/*Poster Image  */}
           {props.poster? <img src={props.poster} className={classes.responsive} alt='movie poster' /> : null}
           
           <div className={classes.TextSide}>
            <h1>{props.title ?props.title.toUpperCase() : null}</h1>
            <h3>{props.tagLine ? props.tagLine : null}</h3>
            <p className={classes.hiddenFlow}>{props.story ? props.story.split(' ').length >100 ? readMore.map(txt=> txt) : props.story : null}</p>
            <h3>{props.genres ? props.genres : null}</h3>
            <p>{props.productionCompanies ? props.productionCompanies : null}</p>
            <div className={classes.AdditionalDetails1}>
                {props.releaseDate ?<p>Original Release:</p> : null}
        <h3>{props.releaseDate ? props.releaseDate : null}</h3>

                {props.episodes ?<p>Number of ep:</p> : null}
        <h3>{props.episodes ? props.episodes : null}</h3>
        
                {props.runTime ?<p>Running Time:</p> : null}
        <h3>{props.runTime ? props.runTime : null}</h3>
            </div>
            <div className={classes.AdditionalDetails1}>
            {props.seasons ?<p>Number of seasons:</p> : null}
        <h3>{props.seasons ? props.seasons : null}</h3>
                {props.revenue ?<p>Box Office:</p> : null}
        <h3>{props.revenue ? props.revenue : null}</h3>
                {props.vote ?<p>Vote Average:</p> : null}
        <h3>{props.vote ? props.vote : null}</h3>
            </div>
            </div>
        </div>
    )
}

export default Card