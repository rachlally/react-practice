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
        <>
        <h2>Count</h2>
        <button onClick={increase}>Increase</button>
        <div>{count}</div>
        <button onClick={decrease}>Decrease</button>
        </>
    )

}

export default Counter;