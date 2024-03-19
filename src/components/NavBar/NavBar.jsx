import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { id: 1, path: './', name: 'Home' },
        { id: 2, path: './', name: 'About' },
        { id: 3, path: './', name: 'Service' },
        { id: 4, path: './', name: 'Contact' },
        { id: 5, path: './', name: 'NotFound' },
    ]
    return (
        <nav>
            <ul className="md:flex justify-evenly py-5 bg-purple-300 mb-14 font-sans text-xl font-semibold">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;