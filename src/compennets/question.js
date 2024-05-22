import Option from "./option";
import '../css/question.css'
const Question = (props) => {

    const Answerchange=(e)=>{
        console.log(e);
        props.Answerchange(props.question.id,e)
    }
    return (  
        <div className={props.selectedoption?'answered':'notanswered'}>
            {props.question.name}

            {props.question.options.map( (o)=>(props.mode=='quiz'|| props.mode=='submit') && (
             <div key={o.id+'-'+props.question.id}>  <Option  mode={props.mode} option={o} isselected={props.selectedoption} Answerchange={Answerchange} /></div>
            ))}
            
        </div>
    );
}
 
export default Question;