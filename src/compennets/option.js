import { useContext, useState } from "react";
import { ThemeContext } from "../context/context";
import '../css/option.css'
const  Option = (props) => {

    const [ischeked,SetIscheked]= useState(false);
    const val = useContext(ThemeContext)
    const change= ()=>
        {
            SetIscheked(!ischeked)
            //if(ischeked)
            props.Answerchange(props.option.id);
        }
    return ( 
        <div  className={val}>
        <input type="checkbox"  onChange={change} 
        checked={props.isselected==props.option.id} 
        id={props.option.id} 
        disabled={props.mode=='submit'}
        />
            {props.option.name}
        </div>
     );
}
 
export default Option;