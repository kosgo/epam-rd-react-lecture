import React from 'react';
import PropTypes from 'prop-types';

export const Homepage = ({ componentData, addNewDispatch, title }) => {
    console.log(componentData);

    return (
        <>
            <h1>
                {title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {componentData.map((el) => <div key={el}>{el}</div>)}
            </div>
            <button onClick={() => addNewDispatch(Math.random() * 10)}>Add new</button>
        </>
    );
};

const movie = PropTypes.shape({
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
}).isRequired;

Homepage.propTypes = {
    componentData: movie,
    title: PropTypes.string,
    addNewDispatch: PropTypes.func.isRequired
};

Homepage.defaultProps = {
    title: 'Hello world',
};
