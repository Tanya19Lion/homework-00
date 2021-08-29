import React from 'react';

const Counter = ({value, id, name, onIncrement, onDecrement, onDelete}) => {
   
    const formValue = () => {
        return value === 0 ? 'Zero' : value;
    };

    const getBadgeClasses = () => {
        let classes = 'badge m-2 bg-';
        classes += value === 0 ? 'danger' : 'primary';
        return classes;
    };

    return (
        <React.Fragment>
            <h4>{name}</h4>
            <span 
                style = {{fontSize: '20px', fontWeight: 'bold',}} 
                className={getBadgeClasses()}
            >
                {formValue()}
            </span>
            <button 
                onClick={() => onIncrement(id)} 
                className='btn btn-secondary btn-sm m-2'
            >
                Increment
            </button>
            <button 
                onClick={() => onDecrement(id)} 
                className='btn btn-secondary btn-sm m-2'
            >
               Decrement
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
        </React.Fragment>
    )
}

export default Counter;