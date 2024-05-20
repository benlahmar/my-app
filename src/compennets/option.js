import { useState } from "react";

const  Option = (props) => {

    const [ischeked,SetIscheked]= useState(false);

    const change= ()=>
        {
            SetIscheked(!ischeked)
            //if(ischeked)
            props.Answerchange(props.option.id);
        }
    return ( 
        <div>
        <input type="checkbox"  onChange={change} 
        checked={props.isselected==props.option.id} 
        id={props.option.id} />
            {props.option.name}
        </div>
     );
}
 
export default Option;