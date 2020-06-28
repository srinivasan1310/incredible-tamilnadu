import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render() {
        return(
            <div>
                <ul>
                <li>
                  <Link to = '/'>Home</Link>
                </li>

                <li>
                  <Link to = '/Login'>Login</Link>
                </li>

                <li>
                  <Link to = '/Signup'>Signup</Link>
                </li>
              </ul>
              <hr />
            </div>
        );
    }
}

export default Header;