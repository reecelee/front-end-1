import { useState } from "react";
import './ListItem.css'

function ListItem({score, description}) {
    return (
        <>
        <div className="list-group-item">
            <h2>{score}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}

export default ListItem