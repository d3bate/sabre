import React, {FunctionComponent} from 'react';


let Row: FunctionComponent<any> = (props) => {
    return <div className="row">
        {props.content}
    </div>
};

let Column: FunctionComponent<any> = (props) => {
    return <div className={"col-" + props.width}>
        {props.content}
    </div>
};
