import React from 'react'
import './input.css'
const input=(props)=>{

    return(
        <input className='inp_fieled'
         list={props.list}
         spellCheck='false'
          type={props.tpy}
           placeholder={props.plcH}
            value={props.val}
             onChange={props.change}
             onKeyPress={props.keyPress}
             />
    )
}

export default input