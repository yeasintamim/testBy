import {FiLogOut} from "react-icons/fi";
import {IoMdHeart} from "react-icons/io";

export const Navbar = () => {
    return(
        <div className="navbar p-3">
             <div className="container-fluid">
                 <b className="navbar-brand font-weight-bold navbar-b" >
                     <h3 className="navbar-h3">Logo</h3>
                 </b>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center pe-2 border-end border-2">
                        <span className="me-1 pointer-on">Business</span>
                        <span className="badge rounded-pill text-light span-new">
                            New
                        </span>
                    </div>
                    <span className="px-2 pointer-on" href="#">Trips</span>
                    <span className="px-3 pointer-on">
                        <IoMdHeart/>
                    </span>
                    <div className="navbar-logout">
                        <FiLogOut className="mx-2"/>
                        Logout
                    </div>
                    
                    <a className="btn btn-light dropdown-toggle ms-3" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" className="img-fluid rounded me-2 navbar-img" alt=""/>
                    </a>
                </div>
             </div>
        </div> 
    );
};