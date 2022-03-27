import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <Link className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;