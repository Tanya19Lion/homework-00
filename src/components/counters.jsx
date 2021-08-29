import React, {useState} from 'react';
import Counter from './counter';

const Counters = () => {

    const initialState = [
        {value: 0, id: 1, name: 'Plate'}, 
        {value: 7, id: 2, name: 'Spoon'}, 
        {value: 0, id: 3, name: 'Folk'}, 
        {value: 7, id: 4, name: 'Knife'}, 
        {value: 0, id: 5, name: 'Table'}, 
    ];

    const [counters, setCounters] = useState(initialState);
    
    const handleIncrement = (counterId) => {
        const counterToInc = counters.map( (counter) => counter.id === counterId ? Object.assign({}, counter, { value: counter.value + 1} ) : counter );
        setCounters(counterToInc);
    };

    const handleDecrement = (counterId) => {
        const counterToDec = counters.map( (counter) => counter.value > 0 && counter.id === counterId ? Object.assign({}, counter, { value: counter.value - 1} ) : counter);
        return setCounters(counterToDec);
    };

    const handleDelete = (counterId) => {
        const newCounters = counters.filter( (c) => c.id !== counterId );
        setCounters(newCounters);
    };

    const handleReset = () => setCounters(initialState);

    return (
        <div>
            <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset all counters</button>
            {counters.map( (counter) => <Counter 
                key={counter.id} 
                {...counter}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
            )}
        </div>
    );
}

export default Counters;