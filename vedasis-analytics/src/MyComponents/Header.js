import React from 'react'

export function Header() {

const textStyle={
    padding: '50px',
    backgroundColor: '#6abfc6'
}
const fontStyle={
    fontSize: '50px'
}
    return (
        <div>
            <nav className="navbar bg-body-tertiary" >
                <div className="container-fluid" style={textStyle}>
                    <span className="navbar-brand mb-0 h1" ><p style={fontStyle}>VEDASIS ANALYTICS</p></span>
                </div>
            </nav>
            
        </div >
    )
}
