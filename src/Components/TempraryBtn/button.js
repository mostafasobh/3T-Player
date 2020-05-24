import React from 'react'
import './button.css'

const button=(props)=>(
<button className='btn' onClick={props.changePage}>{props.page}</button>
)


export default button