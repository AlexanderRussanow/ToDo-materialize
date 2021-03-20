import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav>
        <div className="nav-wrapper purple accent-2 px1">
          <a href="/" className="brand-logo">React + TS</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">To-do list</a></li>
            <li><a href="/">Information</a></li>
          </ul>
        </div>
      </nav>
            
    )
}

// export default Navbar