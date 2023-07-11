import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const StaticCheatsheet = (props) => {
    const info = props.data;
    const editStatus = useSelector(state => state.cheatsheets.editMode);
    const delBtn = useRef(null);

    const handleDelete = (e) => {
        if (!delBtn.current.classList.contains("del-confirm")) {
            delBtn.current.classList.add("del-confirm");
            e.preventDefault(); //Stops post request
            setTimeout(() => {
                delBtn.current.classList.remove("del-confirm");
              }, 3000)            
        } else {
            fetch(`/cheatsheet/${info._id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    }

    return (
        editStatus ?
            <form
                action={`/cheatsheet/${info._id}/update`}
                method="POST"
                className="cheatsheet wrapper flow"
            >
                <input type="text" name="name" defaultValue={info.name} className="title"></input>
                <input type="text" name="description" defaultValue={info.description} className="description flow"></input>
                <button
                    onClick={(e) => {
                        handleDelete(e);
                    }}
                    ref={delBtn}>Delete</button>
                <button type="submit" style={{ display: 'none' }}></button>
            </form> :
            <div className="cheatsheet wrapper flow">
                <h2 className="title">{info.name}</h2>
                <p className="description flow">{info.description}</p>
            </div>

    )

};

export default StaticCheatsheet;