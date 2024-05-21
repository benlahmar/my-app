import { useState } from "react";
import { ThemeContext } from "../context/context";
import Quiz from "./quiz";
import Toggle from "./toogle";

const QuizContext = () => {
    const [theme,setTheme]= useState('dark')

    const chanage= ()=>{
        theme=='dark'?setTheme('ligth'):setTheme('dark')
    }
    return ( 
    <ThemeContext.Provider value={theme}>
        <Toggle changeAny={chanage} />
        
    <Quiz />
    </ThemeContext.Provider> );
}
 
export default QuizContext;