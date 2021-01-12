import React from 'react';
import Synonyms from './Synonyms';

const Definition = (props) => {
    const {definition, example, synonyms} = props;
    console.log(synonyms);

    return (
        <>
            <p>Definition: {definition}</p>
            <p>Example: {example}</p>

            {synonyms ? (
                
                <div>
                {synonyms.map((synonym, idx) => (
                    <Synonyms key={idx} synonym={synonym}/>
                ))}
                </div>
            )
            :null}

        </>
    )
}

export default Definition;