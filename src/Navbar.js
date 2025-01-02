import { BrowserRouter,Routes,route } from "react-router-dom";
function Navbar(){
    return (
        <>
            <div className="container">

            <nav className=" navbar-expand-lg bg-light navbar-light">
            <a className="navbar-brand"> <h3>employee</h3>
                
            </a>
            <ul className="navbar-nav m-1 ">
                <li className="nav-item"> <a className="nav-link active p-2" href="header.js">Add emoployee</a></li>
                <li className="nav-item"><a className="nav-link p-2 " href="#">Delete employee</a></li>
                <li className="nav-item"><a className="nav-link p-2" href="#">update employee</a></li>
                <li className="nav-item"><a className="nav-link p-2" href="#">View employee</a></li>
            </ul>
            
        </nav>
            </div>
        
        </>
    );
}

export default Navbar;