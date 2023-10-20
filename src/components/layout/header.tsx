import NavBar from './navbar.tsx';

import phrase from '../../../data/phrase.json'

function Header() {
    return (
        <header className="col-12 col-lg-4 mb-3 mb-lg-0">
            <h3 className="mb-0">Robson Cavalcante</h3>
            <span>Software Developer at SEFIN RO</span>

            <p className="mt-4 mb-4 mb-lg-0">{phrase}</p>

            < NavBar />

            <ul className="list-unstyled d-flex">
                <li><a href="https://github.com/robmacav" className="me-4 text-black"><i className="fa-brands fa-github fa-xl"></i></a></li>
                <li><a href="https://linkedin.com/in/robmacav" className="me-4 text-black"><i className="fa-brands fa-linkedin fa-xl"></i></a></li>
                <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=robmacav@gmail.com&body=I%20come%20through%20your%20portfolio." className="me-4 text-black"><i className="fa fa-envelope fa-xl"></i></a></li>
            </ul>
        </header>
    )
}

export default Header;