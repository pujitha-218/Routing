/*import {Link} from "react-router-dom";
const Home=()=>{
    return (
        <div>
        <h2>Home page</h2>
        <Link to="/about" className="btn">
        About
        </Link>
        <a href=""/>
        </div>
    );
};*/ 
import {Link,Outlet} from "react-router-dom";
import Navbar from "./Navbar";
const Home=()=>{
    return (
        <section className="section">
        <Navbar></Navbar>
        <h2>Home Page </h2>
    <Outlet/>
        </section>

    );
};
export default Home;