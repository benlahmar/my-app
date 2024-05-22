
export const INCRIMENT= 'INCRIMENT'
export const DECRIMENT= 'DECRIMENT'
export const ADDANSWER='ADDANSWER'

export const increment= ()=>({
type:INCRIMENT
})


export const decrement= ()=>({
    type:DECRIMENT
})

export const addanswer=(idq,ido)=>(
    {
        type:ADDANSWER,
        idq,
        ido,


    }
)