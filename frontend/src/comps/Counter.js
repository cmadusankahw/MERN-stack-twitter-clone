import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    const increment = () => {
        setCounter(counter +1)
    }

    const decrement = () => {
        setCounter(counter -1)
    }

    return (
        <>
            <h1> counter: {counter}</h1>
            <Button variant="light" onClick={decrement}> - </Button>
            <Button style={{marginLeft:10}} variant="light" onClick={increment}> + </Button>
        </>
    )

}

export default Counter;