import React from 'react'

export function Reviews() {
    const textStyle = {
        padding: '30px',
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={textStyle}>Here what our users have to say</h1>
            <div className='reviews' style={{ display: 'flex', marginBottom:'100px', marginTop:'50px' }}>
                <div className="card" style={{ flex: 1, marginRight: '20px' }}>
                    <img src="https://th.bing.com/th/id/OIP.44nLhCXyHwv9egTntam-AgHaHa?pid=ImgDet&w=800&h=800&rs=1" className="card-img-top" alt="..." />
                    <div className="card-body" style={{backgroundColor:'#bcbcbc'}}>
                        <h5 className="card-title">TAYLOR SWIFT</h5>
                        <p className="card-text">
                            "This hiring website exceeded my expectations! The user-friendly interface made job hunting a breeze. The vast selection of job listings allowed me to explore various industries. Real-time updates kept me informed, and the personalized search filters ensured relevance. Thanks to this site, I secured my dream job quickly and effortlessly. Highly recommended!"
                        </p>

                    </div>
                </div>
                <div className="card" style={{ flex: 1, marginRight: '20px' }}>
                    <img src="https://media.licdn.com/dms/image/C4D03AQHJVz9f6T1U4w/profile-displayphoto-shrink_800_800/0/1641436351960?e=2147483647&v=beta&t=lL5fHY0RSJgPtyEBuDu1zerw0MzRME_ZxoMQUqRk6ZI" className="card-img-top" alt="..." />
                    <div className="card-body" style={{backgroundColor:'#bcbcbc'}}>
                        <h5 className="card-title">SELENA GOMEZ</h5>
                        <p className="card-text">
                            "This hiring website exceeded my expectations! The user-friendly interface made job hunting a breeze. The vast selection of job listings allowed me to explore various industries. Real-time updates kept me informed, and the personalized search filters ensured relevance. Thanks to this site, I secured my dream job quickly and effortlessly. Highly recommended!"
                        </p>

                    </div>
                </div>
                <div className="card" style={{ flex: 1 }}>
                    <img src="https://www.uml.edu/Images/Tigert-Johanna-800_tcm18-283160.jpg?w=x" className="card-img-top" alt="..." />
                    <div className="card-body" style={{backgroundColor:'#bcbcbc'}}>
                        <h5 className="card-title">DUA LIPA</h5>
                        <p className="card-text">
                            "This hiring website exceeded my expectations! The user-friendly interface made job hunting a breeze. The vast selection of job listings allowed me to explore various industries. Real-time updates kept me informed, and the personalized search filters ensured relevance. Thanks to this site, I secured my dream job quickly and effortlessly. Highly recommended!"
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
