import React from 'react'

export function Footer() {
    return (
        <footer className="footer" style={{ padding: '50px', backgroundColor: '#000000', marginTop: '100px' }} >
            <div className="container">
                <div className="row" style={{ display: 'flex' }} >
                    <div className="para0" style={{ flex: 1, marginRight: '20px' }}>
                        <p style={{ color: '#ffffff' }}><h3>HireMe.</h3>
                            Discover your dream job with ease! Our hiring website offers a seamless experience, connecting talented individuals with top-notch companies. Embrace endless opportunities and embark on a rewarding career journey today!
                        </p>

                    </div>
                    <div className="para1" style={{ flex: 1, marginRight: '20px' }}>
                        <ul style={{ color: '#ffffff' }}><h3>Jobs</h3>
                            <li>Web Development</li>
                            <li>Software Engineer</li>
                            <li>Android Development</li>
                            <li>Cloud Solution Architect</li>
                            <li>DevOps</li>
                        </ul>

                    </div>
                    <div className="para2" style={{ flex: 1, marginRight: '20px' }}>
                        <ul style={{ color: '#ffffff' }}><h3>Top Companies Hiring</h3>
                            <li>Amazon</li>
                            <li>Coursify</li>
                            <li>JP Morgan</li>
                            <li>Infosys</li>
                            <li>Accenture</li>
                        </ul>
                    </div>
                    <div className="para3" style={{ flex: 1 }}>
                        <ul style={{ color: '#ffffff' }}>
                            <h3>Job Locations</h3>
                            <li>Delhi</li>
                            <li>New York</li>
                            <li>London</li>
                            <li>Paris</li>
                            <li >Tokyo</li>
                        </ul>
                    </div>
                    <div className="para4" style={{ flex: 1 }}>
                        <ul style={{color:'#ffffff'}}><h3>Contact Us</h3>
                        <li><a className="email" href="#">hireme@gmail.com</a></li>
                        <li>Help Center</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
