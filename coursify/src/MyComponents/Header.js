import React from 'react'

export function Header() {
    const headerStyle={
        padding: '5px',
        backgroundColor:'#000000'
    }
    const textStyle={
        color: '#ffffff',
        fontSize: '20px'
    }
    return (
        <div className="nav justify-content-center" style={headerStyle}>
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        <p style={textStyle}><b>HOME</b></p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <p style={textStyle}><b>ABOUT</b></p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <p style={textStyle}><b>FIND JOBS</b></p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#'>
                    <p style={textStyle}><b>SIGN UP</b></p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#'>
                    <p style={textStyle}><b>LOG IN</b></p>
                    </a>
                </li>
            </ul>

        </div>
    )
}
