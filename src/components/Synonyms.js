import react from 'react';

const Synonyms = (props) => {
    const {synonym} = props;
    console.log(props);

    return (
        <>
            <p>Synonym: {synonym}</p>

        </>
    )
}

export default Synonyms;