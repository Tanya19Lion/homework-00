import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const formCount = () => {
        return count === 0 ? 'Zero' : count;
    };

    const getBageClasses = () => {
        let classes = 'badge m-2 bg-';
        classes += count === 0 ? 'danger' : 'primary';
        return classes;
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount (count - 1);
        }
    };

    return (
        <React.Fragment>
            <span 
                style = {{fontSize: '20px', fontWeight: 'bold',}} 
                className={getBageClasses()}
            >
                {formCount()}
            </span>
            <button 
                onClick={handleIncrement} 
                className='btn btn-secondary btn-sm m-2'
            >
                Increment
            </button>
            <button 
                onClick={handleDecrement} 
                className='btn btn-secondary btn-sm m-2'
            >
                Decrement
            </button>
        </React.Fragment>
    )
}

export default Counter;