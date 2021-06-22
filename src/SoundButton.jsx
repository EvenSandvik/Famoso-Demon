import React, { useState, useEffect } from 'react';

function SoundButton(props) {
    const [bruhAudio] = useState(new Audio(props.sound));
    bruhAudio.loop = true;
    const [bruh, setBruh] = useState(false);

    useEffect(() => {
        bruh ? bruhAudio.play() : bruhAudio.pause();
    },
        [bruh]
    );

    const toggleBruh = () => {
        if (!bruh) {
            setBruh(true);
            console.log("play");
        }
        else {
            setBruh(false);
            console.log("pause");
        }

    }

    return <button onClick={toggleBruh} className={props.color}>
        {props.text}
</button>;
}

export default SoundButton;