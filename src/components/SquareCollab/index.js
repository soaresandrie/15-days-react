import React from 'react'
import './styles.css'

const handleClick = texto => () => console.log(texto)

const SquareCollab = () => (
    <button 
        onClick={handleClick("Foi de Novo!!!")} 
        className="square-collab">X</button>
        
)

export default SquareCollab