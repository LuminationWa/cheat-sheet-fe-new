import DehazeIcon from "@mui/icons-material/Dehaze";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useNavigate } from "react-router-dom";
import { loggedOut } from "../redux/authSlice";
import { editOn, editOff } from "../redux/cheatsheetsSlice";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editStatus = useSelector(state => state.cheatsheets.editMode); //Redux store state
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state

  const logOut = () => {
    //Clears stored values and redirects
    localStorage.clear();
    dispatch(loggedOut())
    navigate('/');
  };
  const handleEdit = () => {
    editStatus ? dispatch(editOff()) : dispatch(editOn());
  }

  if (loginStatus) {
    return (
      <nav className="active-user wrapper">
        <Link to="/">Home</Link>
        <button
          onClick={() => {
            handleEdit()
          }}>
          {editStatus ? 'Edit' : 'Read-only'}
        </button>
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
