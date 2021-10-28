import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="http://localhost:3000/"><b>T-Shirt Store</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/ourProducts">Products</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/login">Login</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/cart">Cart</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/About">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/profile">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
