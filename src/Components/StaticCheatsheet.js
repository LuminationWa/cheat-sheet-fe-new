const StaticCheatsheet = (props) => {
    const info = props.data;
    return (
        <div className="cheatsheet wrapper flow">
            <h2 className="title">{info.title}</h2>
            <p className="categories flow">{info.categories}</p>
            <p className="description flow">{info.description}</p>
        </div>
    )
};

export default StaticCheatsheet;