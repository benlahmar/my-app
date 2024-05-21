import { useState } from "react"

const Config = ({config, changeconfig}) => {

    const [conf,SetConf]= useState(config)
const change=(e)=>{
    SetConf({...conf,[e.target.name]:e.target.checked})    
    changeconfig(e.target.name,e.target.checked)
}

    return ( <details className="btn btn-outline-primary">
    
    <summary>Configuration</summary>
    <ul class="list-group">
  <li class="list-group-item">
    <input type="checkbox" name="allowBack" onChange={(e)=>change(e)} />AllowBack
  </li>
  <li class="list-group-item">
  <input type="checkbox" name="allowReview"  onChange={(e)=>change(e)} />AllowReview
  </li>
 </ul>
    </details> );
}
 
export default Config;