const Toggle = ({changeAny}) => {

    return ( 
    <>
     <div className="form-check form-switch btn">
  <input onChange={changeAny} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">switch </label>
</div>
    </> );
}
 
export default Toggle;