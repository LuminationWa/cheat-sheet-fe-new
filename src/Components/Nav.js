import DehazeIcon from "@mui/icons-material/Dehaze";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const Nav = () => {
    const user = false;
    if (user) {
        return;
    } else {
        return (
            <nav className="no-user wrapper">
                <List
                    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    className="menu-list"
                >
                    <ListItemButton>
                        <ListItemText primary="Cheatsheets" /></ListItemButton>
                    <ListItemButton><ListItemText primary="Categories" /></ListItemButton>
                    <ListItemButton><ListItemText primary="Subcategories" /></ListItemButton>
                </List>
                <DehazeIcon />
                <div className="nav-btns">
                    <a className="nav-button">Log in</a>
                    <a className="nav-button">Sign up</a>
                </div>
            </nav>
        );
    }
};

export default Nav;
