import themesData from "../data/themesData";
import ThemeTechno from "./ThemesTechno";

const ThemeTechnoList = () => {
    
    
    return ( <>
    <div className="row">
        { 
            themesData.map((t)=>(
                <ThemeTechno data={t} key={t.slug} />
            ))
        }
    </div>
    </> );
}
 
export default ThemeTechnoList;