import React from 'react'
import '../App.css'

export default function Navbar() {
    return (
        <>
            <nav class="navbar border" style={{background:'none',fontWeight:'bold'}}>
                <div className='container-fluid'>
                    <span class="crimson-text-bold-italic" 
                        style={{fontSize:"26.5px"}}>
                        OLAF.
                    </span>
                </div>
            </nav>
        </>
    )
}
