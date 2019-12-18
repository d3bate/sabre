let Row = (props) => {
    return <div className="row">
        {props.content}
    </div>
};

let Column = (props) => {
    return <div className={"col-" + props.width}>
        {props.content}
    </div>
};
