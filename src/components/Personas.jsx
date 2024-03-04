import PropTypes from 'prop-types';
import { useState } from 'react';



const Personas = ({ lastName, firstName, age, hairColor }) => {
    const [currentAge, setCurrentAge] = useState(age);

    const handleBirthdayClick = () => {
        setCurrentAge(currentAge + 1);
    };

    return (
        <div className='card'>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthdayClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

Personas.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired,
};

export default Personas;