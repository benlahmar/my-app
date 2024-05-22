
const  Postservice = async () => {
    
    const resp=  await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log("-----"+resp.status)
    return reportError.json();
}
 
export default Postservice;