import DehazeIcon from "@mui/icons-material/Dehaze";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useNavigate } from "react-router-dom";
import { loggedOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    //Clears stored values and redirects
    localStorage.clear();
    dispatch(loggedOut())
    navigate('/');
  };

  if (localStorage.token) {
    return (
        <nav className="active-user wrapper">
          <Link to="/">Home</Link>
          <button onClick={() => {
            logOut();
          }}>
            Log out
          </button>
        </nav>
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
