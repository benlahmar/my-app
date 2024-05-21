import Toggle from "../toogle";

const withTheme = (Comp) => {

    const chanage=()=>{
        console.log(Comp);

        
        
    }

    return function WithTheme(props)
    {
        return ( <div>
                <Toggle changeAny={chanage} />
                <Comp {... props}  / >
            </div> ); 
    }
    
    
}
 
export default withTheme;