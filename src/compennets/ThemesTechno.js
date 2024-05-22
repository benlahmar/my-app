import { Link } from "react-router-dom";

const ThemeTechno = ({data}) => {


    return ( 
    <div className="card theme-card col-md-3" >
        <Link to={'/quiz/'+data.slug}>
        
  <img src={data.logo} className="card-img-top theme-card-logo" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.title}</p>
    
  </div>

</Link></div>
     );
}
 
export default ThemeTechno;