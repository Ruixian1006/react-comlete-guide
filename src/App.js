import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  const [personState, setPersonsState] = useState({
    person:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  });
  const [otherState, setOtherState] = useState({otherState:'some other value'});
  const switchNameHandler = (newName,secondName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    setPersonsState({ //React Component Library have this function `setState` to update for the `state`.
      person:[
        {name: newName, age: 28},
        {name: secondName, age: 29},
        {name: 'Stephanie', age: 27},
      ],
      otherState: personState.otherState,
    });
  }

  const nameChangedHandler = (event) => {
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    setPersonsState({ //React Component Library have this function `setState` to update for the `state`.
      person:[
        {name: 'abc', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27},
      ],
      otherState: personState.otherState,
    });
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really Working!</p>
        <p>{personState.otherState}</p> 
        {/* It's IMPORTANT to declare `this.` which will refer to the `switchNameHandler` in the Class */}
        <button onClick={() => switchNameHandler('abc','efg')}>Switch Name</button>
        <Person name={personState.person[0].name}
         age={personState.person[0].age}/>
        <Person name={personState.person[1].name}
         age={personState.person[1].age}
         click={switchNameHandler.bind(this,'John','name')}
         change={nameChangedHandler}/>
        <Person name={personState.person[2].name}
         age={personState.person[2].age}/>
      </div>
    );
   
}
export default app;