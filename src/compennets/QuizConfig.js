import { useState } from "react"

const Config = ({config, changeconfig}) => {

    const [conf,SetConf]= useState(config)
const change=(e)=>{
   
    //SetConf({...conf,[e.target.name]:e.target.checked})    
    if(e.target.type=='checkbox')
        changeconfig(e.target.name,e.target.checked)
    else
    changeconfig(e.target.name,e.target.value)

    
}

    return ( <details className="btn btn-outline-primary">
    
    <summary>Configuration</summary>
    <ul className="list-group">
  <li className="list-group-item">
    <input type="checkbox" name="allowBack" onChange={(e)=>change(e)} />AllowBack
  </li>
  <li className="list-group-item">
  <input type="checkbox" name="allowReview"  onChange={(e)=>change(e)} />AllowReview
  </li>
  <li className="list-group-item">
  <input type="checkbox" name="autoMove"  onChange={(e)=>change(e)} />autoMove
  </li>
  <li className="list-group-item">
  duration: <input type="number" name="duration"  onChange={(e)=>change(e)} />
  </li>
 </ul>
    </details> );
}
 
export default Config;