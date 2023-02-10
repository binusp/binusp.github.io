import React from 'react';
import {MainContext} from "../utils/mainContext";

function Square(props) {

    return (
        <MainContext.Consumer>{value =>
            <div className={'square'}
                 onClick={(e) => {value.write(e,props.id)}}>
                {value.arr[props.id]}
            </div>
        }</MainContext.Consumer>
    );
}

export default Square;