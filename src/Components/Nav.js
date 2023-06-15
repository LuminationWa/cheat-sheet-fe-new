const Nav = () => {
    const user = false;
    if (user) {
        return
    }
    else {
        return(
            <nav className="no-user wrapper">
                <a className="nav-button">Log in</a>
                <a className="nav-button">Sign up</a>
            </nav>
        )
    }
};

export default Nav;