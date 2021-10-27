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
                            <a className="nav-link active" href="http://localhost:3000/">Home</a>
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
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="http://localhost:3000/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="http://localhost:3000/">Action</a>
                                <a className="dropdown-item" href="http://localhost:3000/">Another action</a>
                                <a className="dropdown-item" href="http://localhost:3000/">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="http://localhost:3000/">Separated link</a>
                            </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
