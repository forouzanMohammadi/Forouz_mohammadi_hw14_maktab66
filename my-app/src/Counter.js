import "./style.scss";
import React, {Component} from "react";
import Button from "./Button";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={
            counter:0,
           
        }
       
    }

    

    increase() {
        return(
        this.setState({counter:this.state.counter+1}))
    }

    decrease() {
        if(this.state.counter > 0){
           return(this.setState({counter:this.state.counter-1}))
        }
    
       
    }

render() {
  
    return( 
        <div className="container">
            <h1>{this.state.counter}</h1>
            <div className="row">
                <Button clickHandler={()=> this.increase()}  title={'increase'} />
                <Button clickHandler={()=>this.decrease()} title={'decrease'} />
            </div>   
        </div>
    )
}

}

export default Counter;