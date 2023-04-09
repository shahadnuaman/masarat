import React, { Component } from 'react'
import Counter from './counter';
import { Navigate }  from "react-router-dom";
import ButtonRedirect from './buttonRedi';


class Test extends Component {
    state = {  
        t: "test",
        test: "btn btn-info",
        path:'/counter'
    } 
    render() { 
        return (
            <div>
                <Counter></Counter>
                <h1>hello</h1>
                <ButtonRedirect value={this.state} />
</div>

        );
    }
}
 
export default Test;