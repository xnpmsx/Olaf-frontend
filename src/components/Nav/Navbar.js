import React from 'react'
import '../../App.css'

export default function Navbar() {

    const loginpage = () =>{window.location.href='./Login'}

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
                        style={TKs? {display:'none'}:{fontSize:'16px'}}>Sing up</button>
                    <button className='btn btn-outline-dark m-1' 
                        style={TKs? {display:'none'}:{fontSize:'16px'}} 
                        onClick={loginpage}>Sing in</button>
                </div>
                    
                </div>
            </nav>
        </>
    )
}
