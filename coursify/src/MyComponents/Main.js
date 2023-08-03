import React from 'react'
import {Perks} from './Perks.js'

export function Main() {
    const textStyle = {
        fontSize: '150px',
        color: '#000000',
        textAlign: 'center'
    }
    return (
        <>
            <div>
                <div className="card text-bg-dark">
                    <img src="https://www.letsbegamechangers.com/wp-content/uploads/2021/01/workplace-branding-matters-in-office-culture-2048x931.jpg" className="card-img" alt="" />
                    <div className="card-img-overlay">
                        <h5 className="card-title" style={textStyle}>HireMe.</h5>
                    </div>
                </div>
            </div>
            <Perks/>
            <div style={{padding:'100px'}}>
                <h1 style={{textAlign:'center', padding:'20px'}}>Leading companies at HireMe.</h1>
                <div className="images" style={{padding: '60px', display: "flex", justifyContent: "center",alignItems: "center"}}>
                    <img src="https://anarchismtoday.org/wp-content/uploads/2016/01/Why-consumers-remember-the-logos-of-the-most-popular-brands2.jpg" alt="" />
                </div>
            </div>

        </>
    )
}
