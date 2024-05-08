import './header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
const Header = () => {

    const { user, userType, login, logout } = useAuth();

    return (
        // <header className="bg-blue-500 py-4">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <div className="text-white text-2xl font-bold">
        //             Food Donation Platform
        //         </div>
        //         <nav className="flex space-x-4">
        //             <a href="#" className="text-white hover:text-gray-200">
        //                 Restaurants
        //             </a>
        //             <a href="#" className="text-white hover:text-gray-200">
        //                 NGOs
        //             </a>
        //             <a href="#" className="text-white hover:text-gray-200">
        //                 About
        //             </a>
        //             <a href="#" className="text-white hover:text-gray-200">
        //                 Contact
        //             </a>
        //         </nav>
        //     </div>
        // </header>
        <header>
        <Link to="/" className="logo">Food <b className="text-[#06C167]">Donate</b></Link>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <nav className="nav-bar">
            <ul>
                <li><Link to={userType === "MESS" ? "mess" : "ngo"} className="active">Home</Link></li>
                <li><Link to="about" >About</Link></li>
                <li><Link to="contact" >Contact</Link></li>
                
                {
                    user && <li><Link to="" >{user.name}</Link></li>
                }

                {
                    user && <li onClick={()=>logout()}><button>Logout?</button></li>
                }
            </ul>
        </nav>
    </header>
    );
};

export default Header;
