import React from 'react'
import '../../App.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const TKs = sessionStorage.getItem('accessToken');

    return (
        <>
            <nav className="navbar border-bottom border-dark" 
            style={{background:'none',fontWeight:'bold'}}>
                <div className='container-fluid'>
                    <span className="crimson-text-bold-italic" 
                        style={{fontSize:"30px"}}>
                        OLAF.
                    </span>

                <div className='d-flex'>
                    <button className='btn btn-success m-1'
                        style={TKs? {display:'none'}:{fontSize:'16px'}}>Sing up
                        </button>

                    <button className='btn btn-outline-dark m-1' 
                        style={TKs? {display:'none'}:{fontSize:'16px'}} >
                        <NavLink className={'nav-link'} to={'/auth/login'}>Sing in</NavLink>
                    </button>

                    <button className='btn btn-outline-dark m-1' 
                        style={TKs? {display:'none'}:{fontSize:'16px'}} >
                        <NavLink className={'nav-link'} to={'/auth/usermidlw'}>
                            Logout
                        </NavLink>
                    </button>
                </div>
                    
                </div>
            </nav>
        </>
    )
}
