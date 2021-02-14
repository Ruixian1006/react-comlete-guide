import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>I'm {props.name}, my age is {props.age}</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
    // return <p>I'm {props.name}, my age is {props.age}</p>
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old.</p>
}

export default person;