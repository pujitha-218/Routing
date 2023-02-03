import { Link } from "react-router-dom";
const About=() => {
    return (
        <section className="selection">
        <h4>About</h4>
        <Link to="/Products" className="btn">
        Products
        </Link>
        </section>
    );
};
export default About;

