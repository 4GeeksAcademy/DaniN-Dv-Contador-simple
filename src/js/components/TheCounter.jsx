import { useState, useEffect } from "react"

export const TheCounter = () => {

    const [counter, setcounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setcounter((num) => num + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [counter])

    console.log(counter)




    return (
        <div className="contador">
            <div><i className="fa-solid fa-clock"></i></div>
            <div>{Math.floor((counter / 100000) % 10)}</div>
            <div>{Math.floor((counter / 10000) % 10)}</div>
            <div>{Math.floor((counter / 1000) % 10)}</div>
            <div>{Math.floor((counter / 100) % 10)}</div>
            <div>{Math.floor((counter / 10) % 10)}</div>
            <div>{counter % 10}</div>
        </div>
    )
}