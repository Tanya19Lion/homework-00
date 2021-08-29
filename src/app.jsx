import React, {useState} from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

const App = () => {

    const initialState = [
        {value: 0, id: 1, name: 'Plate'}, 
        {value: 0, id: 2, name: 'Spoon'}, 
        {value: 0, id: 3, name: 'Folk'}, 
        {value: 0, id: 4, name: 'Knife'}, 
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
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <NavBar totalItems = {counters.reduce( (a, c) => a + c.value, 0 )}/>
                <Counters 
                    counters = {counters}
                    onIncrement = {handleIncrement}
                    onDecrement = {handleDecrement}
                    onDelete = {handleDelete}
                    onReset = {handleReset}
                />
            </main>
        </div>
    );
}


export default App;
