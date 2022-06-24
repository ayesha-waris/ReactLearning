import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create
 = () => {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("");
   const [isPending, setIsPendinng] = useState(false);
   const history = useHistory(); 
const handleSubmit = (e) =>{

  e.preventDefault();
  const blog = { title, body,author};
  setIsPendinng(true);
  fetch('http://localhost:3000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPendinng(false);
    })
   // history.go(-1 );
   history.push('/');
}
  return ( 
    <div className="create">
      Add a new blog
      <form onSubmit={handleSubmit}>
        <label> Blog title</label>
        <input
        type="text"
        required
        value={title}
        onChange = {(e)=> setTitle(e.target.value)}
        />
        
        <label> Blog body</label>
        <textarea
        required
        value={body}
        onChange = {(e)=> setBody  (e.target.value)}
        />
         <label> Blog Author</label>
        <select 
         value={author}
         onChange = {(e)=> setAuthor(e.target.value)}> 
          <option value ="mario ">mario</option>
          <option value ="yoshi ">yoshi</option>
        </select>
       {!isPending && <button>Add blog</button>}
       {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
   );
}
 
export default Create
;
