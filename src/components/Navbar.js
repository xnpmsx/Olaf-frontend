import React from 'react'
import '../App.css'

export default function Navbar() {
    return (
        <>
            <nav class="navbar border" style={{background:'none',fontWeight:'bold'}}>
                <div className='container-fluid'>
                    <span class="crimson-text-bold-italic" 
                        style={{fontSize:"30px"}}>
                        OLAF.
                    </span>

                <div className='d-flex'>
                    <button className='btn btn-success m-1' style={{fontSize:'16px'}}>Sing up</button>
                    <button className='btn btn-outline-dark m-1' style={{fontSize:'16px'}}>Sing in</button>
                </div>
                    
                </div>
            </nav>
        </>
    )
}
