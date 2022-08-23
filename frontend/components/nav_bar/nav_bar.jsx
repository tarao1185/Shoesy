import React from 'react';
import { withRouter } from 'react-router-dom';

const NavBar = ({logout, currentUser, openModal, history}) => {
  const redirect = () => {
    logout().then(() => history.push(`/`));
  }

  const session_button = currentUser ? 
    (<button className="btn" onClick={redirect}>Sign out</button>) : 
  
  (<button className="btn" onClick={() => openModal('login')}>Sign in</button>)


  return(
    <header>
      <nav className = "nav-bar">
       <h1 className = "logo">Shoesy</h1>
        <ul>
          <li>{session_button}</li>
          <li><svg xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
            </svg></li>
        </ul>
    </nav >
  </header >)

}
export default withRouter(NavBar)