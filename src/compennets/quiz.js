import { useState } from "react";
import quizData from "../data/quizData";
import Pagination from "./pagination";
import Question from "./question";
import Config from "./QuizConfig";
import Toogle from "./toogle";

const Quiz = () => {

    const [page,setPage] =useState(0)
    const [mode,setMode]= useState('quiz')
    const [answers,setAnswer] = useState({})
    const [autoreview,setaAutoreview]= useState(true)

    const [conf,SetConf]= useState(quizData.config)

    const recuper=(e)=>{
        console.log("parant...."+e)
        setPage(e)
    }

    const Answerchange=(idq,ido)=>
        {
            
            setAnswer({... answers,[idq]:ido})
            console.log(answers)
        }
const changeconfig=(ec,val)=>{
    console.log( ec+"----"+val)
   // setaAutoreview(!autoreview)

    SetConf({...conf,[ec]:val})
    console.log(conf)
}

    return ( 
        <div >
           
            <Config config={conf}  changeconfig={changeconfig}/>
            <h1>{quizData.name}</h1>
            <div >
<button type="button" onClick={()=>setMode('quiz')} className="btn btn-outline-primary">Quiz</button>
<button type="button" hidden={conf.allowReview} onClick={()=>setMode('review')} className="btn btn-outline-secondary">Review</button>
<button type="button" onClick={()=>setMode('submit')} className="btn btn-outline-success">Submit</button>
            </div>
            
            <Pagination  notifier={recuper} allowBack={conf.allowBack}  />
            {
                quizData.questions.map((q,index)=> (index==page || mode!='quiz') &&(
                    <div key={q.id}>
                    <Question question={q} selectedoption={answers[q.id]}  mode={mode} Answerchange={Answerchange}/>
                    </div>
                ))
            }
            </div>
           
        
     );
}
 
export default Quiz;