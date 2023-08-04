import React from 'react'
import { people } from './Data'


export const Table=({data}) => {
    return (
        <div className='table-responsiveness'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person,index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                        <td>{person.website}</td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>

        </div>
    )
}