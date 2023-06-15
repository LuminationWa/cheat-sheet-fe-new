const StaticCheatsheet = (props) => {
    const info = props.data;
    return (
        <div className="cheatsheet">
            <h2>{info.title}</h2>
            <p className="categories">{info.categories}</p>
            <p className="description">{info.description}</p>
        </div>
    )
};

export default StaticCheatsheet;