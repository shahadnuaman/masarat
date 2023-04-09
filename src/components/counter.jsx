import React, { Component } from 'react'
import Users from './users'
import { useNavigate } from "react-router-dom";
import NavigateButton from './navigateButton';

//  export const  withNavigation = () => {
//   return props => <Component {...props} navigate={useNavigate()} />;
// } 

class Counter extends Component {
    state={
        count:this.props.value,
        
     

        
    }
///2 set att
    styles= {
        fontSize:"20px"
    }
///2 set atrbute 
    formatFun() {

        const count = this.state.count
        
        return count == 0 ? "Zero": count
    }

     handelIncrement = () => {
    
        var t = this.state.count

   
        this.setState({
        count: t + 1,
            tags: []
        })
        
    }
    
//     handelRoute =()=> {
// this.props.navigate('/tag');    }
    ////4 
    renderTags() {
        if (this.state.tags.length === 0) return <p>there are no tags</p>;
        return <ul>{this.state.tags.map(tag  => <li key={tag} >{ tag}</li>)}
            </ul>
    }

   
    render()
    { 

        ////prpos id read only
///// to handle delete method we must addd it in Conters component beacuse it have the state
        console.log("prpos", this.props)
        
        // this.props.value
        const count = this.state.count;
        let classes = this.GetBadgeClasses(count)
        return <React.Fragment>
            <div style={{ marginTop: "20px" }}>

                <span>{ }</span>
                <h1>{"ggggh"}</h1>
                <span className={classes}>{
                }</span>

                {this.props.children}
            <button className='btn btn-success btn-sm' onClick={this.handelIncrement}>Increment</button>
            </div>
            {/* on delete method we add prpos beacuse the delete method in counters */}
            {/* {this.props.children} */}
            <br></br>
<button className="btn btn-info" onClick={this.handelRoute}>Click</button>

        </React.Fragment>;
    }

    GetBadgeClasses(count) {
        let classes = "badge m-2 badge-"
        classes += count == 0 ? "warning" : "primary"
        return classes
    }
}
 
export default Counter;