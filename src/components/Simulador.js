import React, { useEffect } from 'react'
import {useState} from 'react'

const Simulador = () => {
    const [genProgress, setGenProgress] = useState(0)
    const [loopeo, setLoopeo] = useState(0)
    const [health, setHealth] = useState(2)
    const [aviso, setAviso] = useState("")
    let reparacion, acercamiento, loop;
    let hasKiller = false

    const repararGen = () => {
        reparacion = setInterval(() => {
            if (Math.ceil(Math.random() * 10) <= 2 && !hasKiller) {
                setAviso("El killer te ha encontrado!");
                hasKiller = true
                acercamiento = setTimeout(() => {
                    recibirGolpe();
                }, 5000)
            }
            setGenProgress(prevGenProgress => prevGenProgress + 1);
        }, 1000)

    }

    const loopear = () => {
        setLoopeo(prevLoop => prevLoop + 1);
        loop = setInterval(() => {
            setLoopeo(prevLoop => prevLoop + 1);
        }, 1000)
    }

    const recibirGolpe = () => {
        setHealth(prevHealth => prevHealth - 1);
    }
    
    useEffect(() => {
        clearInterval(reparacion);
        clearTimeout(acercamiento);
    }, [loopeo])

    useEffect(() => {
        
        return () => {
            
            if (health === 0) {
                clearInterval(reparacion);
            }

            if (reparacion) {
                acercamiento = setTimeout(() => {
                    recibirGolpe()
                }, 5000)
            }
        }
    }, [health])


    
  return (
    <>
        <div className="info">
            <span>{`Generador: ${genProgress}%`}</span>
            <span>{`Loopeo: ${loopeo}%`}</span>
            <span>{aviso}</span>
            <h3>{`Claudette (${health})`}</h3>
        </div>
        <div className="options">
            <button onClick={() => {repararGen()}}>Reparar Generador</button>
            <button onClick={() => {loopear()}}>Loopear Asesino</button>
        </div>
    </>
  )
}


export default Simulador;