import DehazeIcon from "@mui/icons-material/Dehaze";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector((state) => state.auth.userInfo.username);
  if (user) {
    return (
        <div>
            {user}
        </div>
    );
  } else {
    return (
      <nav className="no-user wrapper">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          className="menu-list"
        >
          <ListItemButton>
            <ListItemText primary="Cheatsheets" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Categories" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Subcategories" />
          </ListItemButton>
        </List>
        <DehazeIcon />
      </nav>
    );
  }
};

export default Nav;
