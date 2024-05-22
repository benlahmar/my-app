import { useEffect, useState } from "react";
import quizData1 from "../data/quizData";
import Pagination from "./pagination";
import Question from "./question";
import Config from "./QuizConfig";
import Toogle from "./toogle";
import withTheme from "./Hocs/withtheme";
import withTimer from "./Hocs/withTimer";
import ThemesList from "./ThemesList";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DECRIMENT, INCRIMENT, addanswer, decrement, increment } from "../store/Action";
import { quizDataCsharp } from "../data/quizdatacsharp";

const Quiz = () => {

    

    const [quizData,setQuizData]=useState(quizData1)
    const { theme } = useParams();

    useEffect(()=>{
        if(theme=='typescript')
            {
                setQuizData(quizDataCsharp);
            }
    },[]);

    const [page,setPage] =useState(0)
    const [mode,setMode]= useState('quiz')
    const [answers,setAnswer] = useState({})
    const [autoreview,setaAutoreview]= useState(true)

    const [conf,SetConf]= useState(quizData.config)

    const [duree,setDuree]=useState(0)
    const recuper=(e)=>{
        console.log("parant...."+e)
        setPage(e)
    }
    const answs= useSelector(state=>state.answers)
    const Answerchange=(idq,ido)=>
        {
            dispatcher(addanswer(idq,ido))
           
            setAnswer({... answers,[idq]:ido})
            console.log(answers)
            console.log("from store")
            console.log(answs)
        }
const changeconfig=(ec,val)=>{
    console.log( ec+"----"+val)
   // setaAutoreview(!autoreview)

    SetConf({...conf,[ec]:val})
    console.log(conf)
}
const onsubmit=()=>{
    setMode('submit');
    console.log(answers);
    let score=0;
    quizData.questions.forEach((question)=>{
        const correctoption=question.options.find((o)=>o.isAnswer);
        if(answers[question.id]==correctoption.id)
            score++;
    });
    console.log(score)
}

const dispatcher =useDispatch()
const count = useSelector(state=>state.count)


const currentQuestion= quizData.questions[page];
    return ( 
        <div >
            <h1>{theme}</h1>
            <div>
            <button type="button" onClick={()=>dispatcher(increment())} className="btn btn-outline-primary">increment</button>
            {count}
            <button type="button" onClick={()=>dispatcher(decrement())} className="btn btn-outline-secondary">decrement</button>
               
            </div>
           <h1>{duree}</h1>
            <Config config={conf}  changeconfig={changeconfig}/>
            <h1>{quizData.name}</h1>
            <div >
                <button type="button" onClick={()=>setMode('quiz')} className="btn btn-outline-primary">Quiz</button>
                <button type="button" hidden={!conf.allowReview} onClick={()=>setMode('review')} className="btn btn-outline-secondary">Review</button>
                <button type="button" onClick={()=>onsubmit()} className="btn btn-outline-success">Submit</button>
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
 
export default withTimer(Quiz,30);