import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
    render() {
        return (
            <div>
            <p>Grid</p>
            </div>
        );
      
    }
}
class Main extends React.Component {

    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;

        this.state = {
            generation: 0,
            gridFull : Array(this.rows).fill(Array(this.cols).fill(false))
        }
    }


    render() {
        return (
         <div>
            <h1>The Game of life</h1>
            <Grid 
                 gridFull= {this.state.gridFull}
                 rows = {this.state.rows}
                 cols = {this.state.cols}
            />
            <h2>Generation : { this.state.generation}</h2>
        </div>
        );
        
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));

