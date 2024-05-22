import { useEffect, useState } from "react"

const useDuration=()=>{

    const [duree,setDuree]=useState(0);
    useEffect(()=>{
        setInterval((prev)=>{
            console.log(duree)
            setDuree(duree+1)
         },[1000]);
    },[]);
}