import React from 'react';
import './Personal.css';
import teste1 from '../assets/favicon.jpg'
import Burger from '../components/Burger';

const Professional = () => {
  return (
    <div>
      <nav className='navPersonal'>
        <div className='menuPersonal'>
          <img src={teste1} alt="avatar" className='avatar'/>
          <p>teste</p>
        </div>
        <Burger />
      </nav>
      <div className='corpo'>
        <h1>Professional</h1>

      </div>
    </div>
  )
}

export default Professional