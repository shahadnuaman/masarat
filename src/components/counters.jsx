import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component {
    state = {  
        counters: [
            { id: 1, value: 0 },
             {id:2,value:0},
            {id:3,value:5}

        ]
    } 
    render() { 
        return (<div>

            {/* <Counter />
                        <Counter />
            <Counter />
            <Counter />
            <Counter /> */}

            {/* {
                this.state.counters.map(coun => (<Counter key={coun.id} value={coun.value} >
                
                <Counter/>)
                )
            } */}

            {this.state.counters.map(coun => (<Counter key={coun.id} value={coun.value} id ={coun.id}>
                {/* <h1>hi</h1> */}
            </Counter>))}

            {/* we can counter object insted of adding value and cheldrin */}
            
        </div>);
    }
}
 
export default Counters;