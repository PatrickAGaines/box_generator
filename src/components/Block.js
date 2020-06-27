import React, { useState } from 'react';


const Block = props => {
    const blockStyle = {
        background: props.color,
        height: "100px",
        width: "100px",
        display: "inline-block",
        color: "white",
        margin: "10px"
    }

    return(
        <div style={ blockStyle }>
            This is a { props.color } Block
        </div>
    );
}

export default Block;