
import Lists from "./Lists";
import useFetch from "./useFetch";
const Home = () => {

  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])

  // const [blogs, setBlogs] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
const url = 'http://localhost:3000/blogs';
  const { blogs, isLoading} = useFetch(url);
  // const handleDelete = (id) => {

  //   const updatedBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(updatedBlogs);

  // };
// const handleClick = () => {
// console.log("clicked");
// }

// const handleClick = (name, e) => {
//   console.log("clicked" + name);
//   console.log(e);
//   }
//  useEffect( () =>{
    
//    fetch('http://localhost:3000/blogs')
//    .then(res => {
//      if(!res.ok){
//        throw Error("error in fetching");
//      }
//      return res.json() 
//    })
//    .then((data) => {
//       setBlogs(data);
//       setIsLoading(false);
//    } )
//    .catch(err =>{
//      console.log(err.message);
//    })
//  },[]);  


  return ( 
    <div className="home">
      <h2>Home Page </h2>
      {/* <button onClick={handleClick}> Click me</button> */}
      {/* <button onClick = {(e) => { handleClick("ayesha",e)}}> Click me</button> */}
       {isLoading && <div> is Loading ...............</div>}
       {blogs && <Lists blogs = {blogs}  />}
    </div>
   );
}
 
export default Home;