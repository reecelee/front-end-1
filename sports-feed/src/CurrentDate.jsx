import { useState } from "react";

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <h1>Top Games of {currentDate.toLocaleString()}</h1>
    )
}

export default CurrentDate