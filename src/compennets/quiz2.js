import { useState } from "react";
import quizData from "../data/quizData";

const Quiz2 = (props) => {

    
    const [page,setPage]=useState(0);
    const p=0;
    const handlNext=()=>{
        //page++;
        setPage(page+1);
    }
    const handlPrev=()=>{
        setPage(page-1)
    }

    const goto= (x)=>{
        setPage(x);
    }
    
    return ( 
    <div>
            <h1>{quizData.name}</h1> 
            <h4>{quizData.description}</h4>
            <div>
            <button className="btn btn-primary" disabled={page==0} onClick={()=>goto(page-1)}>prev</button>
            <button  disabled={page==quizData.questions.length-1} onClick={()=>goto(page+1)}>next</button>
            </div>
            {
            quizData.questions.map((q,index)=>index==page &&
                (<div key={q.id}>
                    <h5>{index}-{q.name}</h5>
                    {q.options.map((o)=>(
                    <div key={o.id}> 
                    <input type="checkbox"  /> {o.name}
                    </div>) )}

                </div>)
            )
            
            }
    </div> );
}
 
export default Quiz2;