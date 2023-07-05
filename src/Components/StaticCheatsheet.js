const StaticCheatsheet = (props) => {
    const info = props.data;
    return (
        <div className="cheatsheet wrapper flow">
            <h2 className="title">{info.name}</h2>
            <p className="description flow">{info.description}</p>
        </div>
    )
};

export default StaticCheatsheet;