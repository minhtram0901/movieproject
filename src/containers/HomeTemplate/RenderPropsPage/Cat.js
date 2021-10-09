import React from 'react'

export default function Cat(props) {
    const {mouse} = props;
    return (
        <img src="./img/cat2.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
}
