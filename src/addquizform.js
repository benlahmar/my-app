import { useState } from "react";

const AddQuiz = () => {

    const [quiz,setQuiz]=useState({})
    const send=(q)=>{

    }

    const add=()=>{
        sessionStorage.setItem("a",quiz);
        return "aa";
    }
    return ( <>
    <form action={send} >
        <input type="text" value={quiz.name} onInput={(e)=>setQuiz({'name':e.target.value})} />
        <button type="submit" value="add">Save</button>
        <button type="button" formAction={add} value="add2">add</button>
    </form>
    {JSON.stringify(quiz)}
    </> );
}
 
export default AddQuiz;