import { useEffect, useState } from "react"

const withTimer=(Component, limite)=>{

    return (props)=>{

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
                       // const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
                       // document.body.style.backgroundColor = randomColor;
                        return prev-1;
                })
            },1000);
            return ()=>{
                clearInterval(timer)
            };

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