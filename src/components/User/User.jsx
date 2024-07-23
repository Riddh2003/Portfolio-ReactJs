import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const { user } = useParams();
    return (
        <>
            <div className='w-full flex justify-center my-5'>
                <div className='bg-orange-400 w-11/12 flex items-center justify-center'>
                    <h1>User: {user}</h1>
                </div>
            </div>
        </>
    )
}

export default User
