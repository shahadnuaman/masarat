import React, { Component } from 'react'
import { Link } from 'react-router-dom';


const test = (props) => {
     return (
            
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
                            <Link to="/user" replace>
                                Users </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tag" replace>Tag</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="">Action</Link>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
                     </li>
                     {/* {props.} */}
      <li className="nav-item">
        <Link className="nav-link " to="/counters" replace>Counters</Link>
                        </li>
                        <li className="nav-item">
        <Link className="nav-link " to="/counter" replace>Counter</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }


class NavBar extends Component {
    state = {  } 
    render() { 
        return (<div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/user">Users</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
                            <Link to="/composing" replace>
                                Composing </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tag" replace>Tag</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/counters" replace>Counters</Link>
                        </li>
                        <li className="nav-item">
        <Link className="nav-link " to="/counter" replace>Counter</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        </div>);
    }
}
 
export default NavBar;