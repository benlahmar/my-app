
const QuizApi = async () => {
    const resp= await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!resp.ok)
        return ''
    return  resp.json();
}
 
export default QuizApi;