import React from 'react'
import './list.css'

const list=(props)=>{


    return(
        <datalist id={props.idList} onChange={props.change}>
          {props.options.map((option,index)=>{
              return <option key={index} id='opt' value={option} />
          })}
        </datalist>
    )
}

export default list