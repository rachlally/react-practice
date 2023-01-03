import React, {useState} from 'react'



const Counter = () => {

    const [count, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count+1)
    }

    const decrease = () => {
        setCounter(count => count-1)
    }


    return (
        <div className="m-3 p-3 border border-primary">
        <h2 >Count</h2>
        <button onClick={increase} className="btn btn-success">Increase</button>
        <div>{count}</div>
        <button onClick={decrease} className="btn btn-danger">Decrease</button>
        </div>
    )

}

export default Counter;