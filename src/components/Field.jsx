import React from 'react';
import Square from "./Square";
import {MainContext} from "../utils/mainContext";

const Field = () => {

    return (
        <MainContext.Consumer>{ value =>
            <div className={'field'}>
                {
                    value.arr.map((ch,index) => (
                        <Square key={index} id={index}/>
                    ))
                }
            </div>
        }
        </MainContext.Consumer>
    );
};

export default Field;