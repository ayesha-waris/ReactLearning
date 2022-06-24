import { Link } from "react-router-dom";


const Lists = (props) => {
 
 
  const blogs = props.blogs
  return ( 

  
    
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to = {`/blogs/${blog.id}`} > 
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          </Link>
          
          {/* <button onClick={()=>{
            props.handleDelete(blog.id);
          }}> Delete</button> */}
        </div>
         ))}
    </div>
   );
}
 
export default Lists;