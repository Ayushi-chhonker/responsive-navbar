import React from 'react'

const Navbar = () => {
    
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo */}
        <div className='logo'>
            Logo
        </div>

        {/* navbar links */}
        <ul className='navlinks'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#how'>How it works</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#pricing'>Pricing</a></li>
        </ul>
        <button className='nav-button'>Create account</button>
    </div>
    </nav>
  )
}

export default Navbar