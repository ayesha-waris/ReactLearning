import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
 const history = useHistory();
  const {  blogs, isLoading } = useFetch('http://localhost:3000/blogs/' + id);
const handleDelete = (e) =>{
fetch('http://localhost:3000/blogs/' + blogs.id,{
  method:'DELETE'
}).then( ()  =>{
history.push('/');
})
}

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      
      { blogs && (
        <article>
          <h2>{ blogs.title }</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
          <button onClick={handleDelete}> Delete</button>
        </article>
      )}
    </div>
  );
}
 
 
export default BlogDetails;