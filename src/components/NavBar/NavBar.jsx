import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: './', name: 'Home' },
        { id: 2, path: './', name: 'About' },
        { id: 3, path: './', name: 'Service' },
        { id: 4, path: './', name: 'Contact' },
        { id: 5, path: './', name: 'NotFound' },
    ]
    return (
        
    <nav>
        <div  className="cursor-pointer text-3xl font-bold  md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <IoCloseOutline  /> : 
                <FiMenu />
            }
            
        </div>
        <ul className="md:flex justify-evenly py-5 bg-purple-300 mb-14 font-sans text-xl font-semibold">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
    );
};

export default NavBar;