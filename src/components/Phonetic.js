import React from 'react';

const Phonetic = (props) => {
    const {text} = props;

    return (
        <>
            <p>Phonetic: {text}</p>
        </>
    );
};

export default Phonetic;