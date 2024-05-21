import { useEffect, useState } from "react"

const withTimer=(Component, limite)=>{

    return function WithTimer(props){

      const  [time,setTime]=useState(limite);

        useEffect(()=>{
            const timer= setInterval(()=>{

                setTime((prev)=>{
                    if(prev<=1)
                        {
                            clearInterval(timer);
                            alert("over")
                            return 0;
                        }
                        console.log(prev)
                        return prev-1;
                })
            },1000);
            return ()=>{
                clearInterval(timer)
            }

        },[]);
        return (
            <>
            <h4>{time}</h4>
        <Component {... props} limite={limite}/>
        </>
    ) 
    }
}
export default withTimer;