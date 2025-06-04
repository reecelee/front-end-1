import { useState } from "react";

function ListItem({score, description}) {
    return (
        <>
        <h2>{score}</h2>
        <p>{description}</p>
        </>
    )
}

export default ListItem