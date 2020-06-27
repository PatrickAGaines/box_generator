import React, { useState } from 'react';
import Block from './Block.js';

const BlockDisplay = props => {
    return(
        props.blocks.map((block) => (
            <Block key={ block.id }color={ block.color } />
        ))
    );
}

export default BlockDisplay;