import { Link } from "react-router-dom";
const Navbar  = () => {
  return (
    <nav className="navbar">
       <h1> The dogo Blog</h1>
       <Link to="/"> Home</Link>
       <Link to="/create"> new blog</Link>
       </nav>
  );
}
 
export default Navbar ;