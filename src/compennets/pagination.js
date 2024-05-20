import { useState } from "react";
import '../css/navigation.css'
const Pagination = (props) => {

    const [p,setP]=useState(0);

    
    const goto=(x)=>
        {
                setP(x);
                console.log('pagination '+p)
                props.notifier(x)

        }
    return ( 
        <div className="row">
            <div className="col-md-4"></div>
        <nav aria-label="Page navigation " className="col-md-4">
  <ul className="pagination">
    <li className="page-item" hidden={p==0}><a onClick={()=>goto(p-1)} className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a onClick={()=>goto(1)} className="page-link" href="#">1</a></li>
    <li className="page-item"><a onClick={()=>goto(2)} className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a onClick={()=>goto(p+1)} className="page-link" href="#">Next</a></li>
  </ul>
</nav>
        </div>
     );
}
 
export default Pagination;