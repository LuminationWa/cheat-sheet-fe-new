import React, { useEffect, useState } from "react";
import placeHolderCS from "./placeholderCheatsheets";
import StaticCheatsheet from "./StaticCheatsheet";
import { useSelector } from "react-redux";


const CheatsheetOverview = () => {
  const [cheatsheets, setCheatsheets] = useState([]);
  const userCheatsheets = useSelector(state => state.cheatsheets.userCheatsheets);

  useEffect(() => {
    const newCheatsheets = userCheatsheets.map((CS) => (
      <StaticCheatsheet key={CS._id} data={CS} />
    ));

    setCheatsheets(newCheatsheets);
  }, [userCheatsheets]);

  return <section className="overview wrapper">
    {cheatsheets}
  </section>;
};

export default CheatsheetOverview;

