import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './nevbar.css'

const Nevbar = () => {

    return (
        <div className="nevbar">
            <ul className="nev-ul">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/calculator">Calculator</CustomLink>
                <CustomLink to="/weather">Weather</CustomLink>
                <CustomLink to="about">About US</CustomLink>
            </ul>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nevbar