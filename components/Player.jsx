import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)

        if (isEditing) { 
        onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        console.log(event);
        
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let buttonCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
        // buttonCaption = 'Save';
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )

}