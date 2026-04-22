import { Component } from "react";
import css from './Counter.module.css';

class Counter extends Component {
    state = {
        value: 0,
    }

    handleClickIncrement=()=>
      this.setState((prevState)=>({ value: prevState.value + 1}))
    

    handleClickDecrement=()=>
      this.setState((prevState)=>({ value: prevState.value - 1}))
       
    

    render(){
        const{ value } = this.state;
        return(
                
        <div className={css.position}>
            <div
                className="card bg-dark"
                style={{ width: '600px'}}
            >

            <div className="card-body">
                <h5 className="card-title text-center">Counter</h5>
                <p
                    className="card-text"
                    style={{ fontSize: '80px'}}
                >
                    {value}
                </p>

                <div  className="d-flex">

                    <button 
                    className={css.btn}
                    onClick={this.handleClickIncrement}
                    >
                        <i  className="bi bi-plus"></i>
                    </button>

                    <button 
                    className={css.btn}
                    onClick={this.handleClickDecrement}
                    >
                        <i  className="bi bi-dash"></i>
                    </button>

                </div>


             </div>
           </div>
        </div>
    
    )}
}

export default Counter;