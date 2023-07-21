import React, { useEffect, useState } from "react";
import placeHolderCS from "./placeholderCheatsheets";
import StaticCheatsheet from "./StaticCheatsheet";
import CheatSheetModal from "./NewCheatsheetModal";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CheatsheetOverview = () => {
  const [cheatsheets, setCheatsheets] = useState([]);
  const loginStatus = useSelector(state => state.auth.loginStatus); //Redux store state
  const userCheatsheets = useSelector(state => state.cheatsheets.userCheatsheets);

  useEffect(() => {
    const newCheatsheets = userCheatsheets.map((CS) => (
      <StaticCheatsheet key={CS._id} data={CS} />
    ));

    setCheatsheets(newCheatsheets);
  }, [userCheatsheets]);

  //The token confirmation is already gotten from the App.js file. Only other positibility is that loginStatus hasn't been set yet, conditional takes care of that.
  return <section className="overview wrapper">
    {loginStatus ?
      <div>
        <CheatSheetModal />
        {cheatsheets}
      </div> :
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>}
  </section>;
};

export default CheatsheetOverview;

