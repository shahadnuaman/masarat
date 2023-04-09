import React, { Component } from 'react'
import { GetUsers } from './Api/user';


class SysUsers extends Component {
    state = { 
Users: GetUsers()


    } 
    
    handelDelete = (user) => {
        
        const t = this.state.Users.filter(u => u.Id != user.Id)
        
        this.setState({
            Users:t
        })
       
   }
    render() { 
        return (<div>
          
<table className="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>User</th>
            <th>Position</th>
            <th>Location</th>
        </tr>
                </thead>
                <tbody>
                    {this.state.Users.map(user =>
                        <tr key={user.Id}>
                            <td>{ user.Id}</td>
                            <td>{ user.Name}</td>
                            <td>{user.Position}</td>
                            <td>{user.Location}</td>
                            <button onClick={() => this.handelDelete(user)}
                                className='btn btn-danger'>Delete</button>
                        </tr>
                       
                        
                    )} 
                     
                </tbody>
            

</table>

        </div>);
    }
}
 
export default SysUsers;