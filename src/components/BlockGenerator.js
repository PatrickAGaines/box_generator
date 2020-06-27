import React, { useState } from 'react';

const BlockGenerator = ({ addBlock }) => {
    const [state, setState] = useState({ color: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        addBlock(state.color);
        setState({ color: "" });
    }

    const onChange = (e) => setState({ [e.target.name]: e.target.value });

    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                name="color"
                placeholder="Build a block..."
                value={ state.color }
                onChange={ onChange }
            />
            <input
                type="submit"
                value="create"
            />
        </form>
    );
}

export default BlockGenerator;