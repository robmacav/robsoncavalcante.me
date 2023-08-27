function NavBar() {
    return (
        <nav className="my-5 d-none d-lg-block">
            <ul className="list-unstyled">
                <li className="mb-2"><a href="#about" className="text-decoration-none text-black">About</a></li>
                <li className="mb-2"><a href="#experiences" className="text-decoration-none text-black">Experiences</a></li>
                <li><a href="#projects" className="text-decoration-none text-black">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;