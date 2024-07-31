import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className = 'nav'>
            <Link to = '/' className = "site-title">UF.Tech</Link>
            <ul>
                <CustomLink className = "projects-link" to = "/projects">Projects</CustomLink>
                <CustomLink className = "about-link" to = "/about-me">About Me</CustomLink>
                <CustomLink className = "resume-link" to = "/resume">Resume</CustomLink>
            </ul>
        </nav>
    )
};

function CustomLink({className, to, children, ...props}) {
    const resolvedPath = useResolvedPath(to); 
    const isActive = useMatch({path : resolvedPath.pathname, end: false})
    return (
        <li className={isActive ? "active" : ""}>
            <Link  className = {className} to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}