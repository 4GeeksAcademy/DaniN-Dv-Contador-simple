import { useState, useEffect } from "react"

export const TheCounter = () => {

    const [regresive, setregresive] = useState()

    const [counter, setcounter] = useState(0)

    const [button, setbutton] = useState(true)
    const [button2, setbutton2] = useState(true)

    if (button) {
        useEffect(() => {

            if (button2 == false) return

            const interval = setInterval(() => {
                setcounter((num) => num + 1)
            }, 1000)

            return () => clearInterval(interval)

        }, [counter, button2])
    } else {
        useEffect(() => {

            if (button2 == false) return
            if (regresive < 1) return

            const interval = setInterval(() => {
                setregresive((num => num - 1))
            }, 1000)

            return () => clearInterval(interval)
        }, [regresive, button2])
    }

    console.log(counter)




    return (
        <>
            <div className="contador">
                <div><i className="fa-solid fa-clock"></i></div>
                <div>{button ? Math.floor((counter / 100000) % 10) : Math.floor((regresive / 100000) % 10)}</div>
                <div>{button ? Math.floor((counter / 10000) % 10) : Math.floor((regresive / 10000) % 10)}</div>
                <div>{button ? Math.floor((counter / 1000) % 10) : Math.floor((regresive / 1000) % 10)}</div>
                <div>{button ? Math.floor((counter / 100) % 10) : Math.floor((regresive / 100) % 10)}</div>
                <div>{button ? Math.floor((counter / 10) % 10) : Math.floor((regresive / 10) % 10)}</div>
                <div>{button ? counter % 10 : regresive % 10}</div>
            </div>
            <div className="regresivo">
                <input className="form-control" type="text" placeholder="number" id="number" value={regresive} onChange={() => setregresive(event.target.value)} />
                <button className="btn btn-secondary" onClick={() => setbutton(!button)}>{button == true ? 'Regresive' : 'Continue'}</button>
            </div>

            <div className="stop-restart">
                <button className={`btn btn-${button2 ? 'danger' : 'success'}`} onClick={() => setbutton2(!button2)}>{button2 == true ? 'Stop' : 'Resume'}</button>
                <button className="btn btn-primary" onClick={() => button ? setcounter(0) : setregresive(0)}>Restart</button>
            </div>

        </>
    )
}