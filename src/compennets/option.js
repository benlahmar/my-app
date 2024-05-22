import { useContext, useState } from "react";
import { ThemeContext } from "../context/context";
import '../css/option.css'
import { useDispatch, useSelector } from "react-redux";
import { addanswer } from "../store/Action";
const  Option = (props) => {

    const [ischeked,SetIscheked]= useState(false);
    const val = useContext(ThemeContext)

    const dispatcher =useDispatch()
    const count = useSelector(state=>state.count)
    const answs= useSelector(state=>state.answers)

    const change= ()=>
        {
            SetIscheked(!ischeked)
            //if(ischeked)
            props.Answerchange(props.option.id);
            dispatcher(addanswer(2,props.option.id))
            console.log(answs)
        }
    return ( 
        <div  className={val} >
        <input type="checkbox"  onChange={change} 
        checked={props.isselected==props.option.id} 
        id={props.option.id} 
        disabled={props.mode=='submit'}
        />
            {props.option.name}--{count}
        </div>
     );
}
 
export default Option;