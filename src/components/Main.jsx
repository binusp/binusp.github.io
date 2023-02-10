import React from 'react';
import Field from "./Field";
import {MainContext} from "../utils/mainContext";

class Main extends React.Component{

    constructor() {
        super();
        this.state = {
            arr : [null, null, null, null, null, null, null, null, null],
            isTurnX : true,
            counter : 0,
            results : null
        }
    }

    write = (e, id) => {
        if(this.state.results){
            return null
        }
        let temp = [...this.state.arr]

        if(!this.state.arr[id]){
            temp[id] = this.state.isTurnX ? 'X' : '0'
            let counter = this.state.counter
            this.setState({
                arr : temp,
                isTurnX : !this.state.isTurnX,
                counter : ++counter
            })
        }

        if(this.state.counter > 3){
            let result = this.checkWinner(temp)
            if(result)
                this.setState({
                    results : `Winner ${result}`
                })
        }

        if (this.state.counter === 8){
            this.setState({results : 'DRAW'})
        }
    }


    checkWinner = (temp) => {
        const combinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for (let i = 0; i < combinations.length; i++){
            const [pos1, pos2, pos3] = combinations[i]
            if (temp[pos1] === temp[pos2] && temp[pos1] === temp[pos3])
                return temp[pos1]
        }

        return null
    }

    restart = () =>{
        this.setState( {
            arr : [null, null, null, null, null, null, null, null, null],
            isTurnX : true,
            counter : 0,
            results : null
        })
    }

    render(){
        return (
            <div>
                <MainContext.Provider value={{
                    arr: this.state.arr,
                    write: this.write
                }}>
                    <h2>{
                        this.state.results
                            ? `Results: ${this.state.results}`
                            : `Turn ${this.state.isTurnX ? 'X' : '0'}`
                    }</h2>
                    <Field/>
                    {
                        this.state.results
                            ?  <button onClick={this.restart}>Again?</button>
                            : null
                    }

                </MainContext.Provider>
            </div>
        );

    }
}

export default Main;