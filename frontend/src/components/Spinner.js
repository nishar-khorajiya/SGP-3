import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(5);
    const history = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) =>  --prevValue )
        }, 1000)

        count == 0 && history('/login');
        return () => clearInterval(interval)

    }, [count, history])
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
                <h1 className='Text-center'>Redirecting to you in {count} second</h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner