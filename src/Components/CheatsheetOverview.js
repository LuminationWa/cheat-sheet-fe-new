import React, { useEffect, useState } from "react";
import placeHolderCS from "./placeholderCheatsheets";
import StaticCheatsheet from "./StaticCheatsheet";

const CheatsheetOverview = () => {
  const [cheatsheets, setCheatsheets] = useState([]);

  useEffect(() => {
    const newCheatsheets = placeHolderCS.map((CS) => (
      <StaticCheatsheet key={CS.id} data={CS} />
    ));

    setCheatsheets(newCheatsheets);
  }, []);

  return <section className="overview wrapper">
    <StaticCheatsheet data={placeHolderCS[0]}/>
    {cheatsheets}
  </section>;
};

export default CheatsheetOverview;
