import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Tooltip } from "recharts";
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
        
    <nav className="p-3 md:py-0 md:p-0 py-2 px-4">
        <div  className="cursor-pointer text-3xl font-bold  md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <IoCloseOutline  /> : 
                <FiMenu />
            }
            
        </div>
        <ul className={`md:flex duration-1000 md:static absolute md:ml-0 ml-3 justify-evenly px-4 md:px-0 md:rounded-none rounded-xl 
        ${open ? 'top-10' : '-top-60'}
        mt-3 bg-orange-400 md:py-2 py-5 mb-14 md:mb-2 font-sans text-xl font-semibold`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </nav>
    );
};

export default NavBar;