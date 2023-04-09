import axios from 'axios';
import React, { Component } from 'react'
import { getUsers } from './Api/usersApi';
import { ToastContainer ,toast} from 'react-toastify';
import { GetUsers } from './Api/user';
class Users extends Component {
    state = { 
        users: [],
        data: []
    } 
    
    constructor() {
     super()   
    }
    handelDelete = async(user) => {
        try {


            await axios.delete("https://jsonplaceholder.typicode.com/posts" + "/" +"userid"+ user.id,)
        

            const users = this.state.users.filter(t => t.id !== user.id)
        //  throw new Error('')
            this.setState({ users: users })
            
        }

        catch (ex) {
            alert('error')
            // toast.error("error 401")
        }
    }

       
    handelUpdate = async(user) => {
        
        user.title = "updated"
        user.body="willupdate"

        await axios.put('https://jsonplaceholder.typicode.com/posts'+"/"+user.id,user)
            await axios.patch('https://jsonplaceholder.typicode.com/posts'+"/"+user.id,{title:"",body:""})

        const users = this.state.users
        const index = users.indexOf(user); 
        users['index']={...user}
        this.setState({
            users: users,
        })

    }

    getData=async()=> {
         try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data)
           
           
             ///toast.success("Data retrived successfully")
             toast.error("not retraived")

            this.setState({ users: response.data })
        }
        catch (ex) {

            
        }
    }

     componentDidMount() {
     this.getData()
    }

      addUser=async()=> {
        
        const test = await axios.post("/api",{title : "test",body:"hdhgj"})

    }
     addUser = async() =>{
     const {data:post} = await  axios.post("https://jsonplaceholder.typicode.com/posts",{title:"test",body:"ree"})
  
         console.log(post)
         
         const newUsers = [post,...this.state.users]
         this.setState({users:newUsers})
    }
    
    render() { 
        return (<div>
            <ToastContainer />
            <h2> Users Component</h2>
            <button onClick={this.addUser} className="btn btn-info">Add</button>
            {/* using zen coding tech. */}
            <table className="table">
                <thead>
                     <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                                        <th></th>
                                        <th></th>

                </thead>
                <tbody>
                    {this.state.users.map(user => <tr key={user.id} className="th">
                        <td className="td"> { user.id}</td>
                        <td className="td">{ user.title}</td>
               <td className="td">{ user.position}</td>

                        <td className="td">{user.body}</td>
                     <td><button onClick={()=> this.handelUpdate(user)} className='btn btn-info btn-m2'> Upatde</button>
                        </td>
                        <td><button onClick={() => this.handelDelete(user)} className='btn btn-danger btn-m2'> Delete</button>
                   </td></tr>)}
                  
                </tbody>
            </table>
         
        </div>);
    }


}
 
export default Users;