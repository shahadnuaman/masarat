import React, { Component } from 'react'
import Counter from './counter';
class Composing extends Component {
    state = { 
        count: [{ id: 1, value: 0, test:"ff" },
        { id: 2, value: 0,test:"hhdh" },
        {id:3,value:5 , test:"uuu"}
        ]

     } 
    render() { 
        return (
<div>
                {this.state.count.map(co => (<Counter key={co.id} co= {co} >


                </Counter>))}


</div>
        );
    }
}
 
export default Composing;