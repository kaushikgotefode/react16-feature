import React, { Component } from 'react';

import CharPicker from './CharPicker';
import Character from './Character';

class ReactHooks extends Component {
  state = {
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  };

  sideHandler = side => {
    this.setState({ side: side });
  };

  charSelectHandler = event => {
    const charId = event.target.value;
    this.setState({ selectedCharacter: charId });
  };

  destructionHandler = () => {
    this.setState({ destroyed: true });
  };

  render() {
    let content = (
      <React.Fragment>
        <CharPicker
          side={this.state.side}
          selectedChar={this.state.selectedCharacter}
          onCharSelect={this.charSelectHandler}
        />
        <Character selectedChar={this.state.selectedCharacter} />
        <button onClick={this.sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={this.sideHandler.bind(this, 'dark')}>Dark Side</button>
        {this.state.side === 'dark' && (
          <button onClick={this.destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (this.state.destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
  }
}

export default ReactHooks;

// ===========================================================================================

import React, { useState, useContext, useRef } from "react";

import CharPicker from "./CharPicker";
import Character from "./Character";
import { UserContext } from '../../../utils/UserContext';

const ReactHooks = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [side, setSide] = useState("light");
  const [destroyed, setDestroyed] = useState(false);
  const { userName, setUserName } = useContext(UserContext);

  const summaryContainerRef = useRef();

// import React, { useState } from "react";

// import CharPicker from "./CharPicker";
// import Character from "./Character";

// const ReactHooks = () => {
//   const [selectedCharacter, setSelectedCharacter] = useState(1);
//   const [side, setSide] = useState("light");
//   const [destroyed, setDestroyed] = useState(false);


//   const sideHandler = side => {
//     setSide(side);
//   };

//   const charSelectHandler = event => {
//     const charId = event.target.value;
//     setSelectedCharacter(charId);
//   };

//   const destructionHandler = () => {
//     setDestroyed(true);
//   };


  let content = (
    <React.Fragment>
      <div ref={summaryContainerRef}>
        Hi { userName }
      </div>
      <CharPicker
        side={side}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
      <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
      <button onClick={() => setUserName('Jake Ryan')}>On Click You Switch to Jake Ryan !</button>
      <button onClick={() => console.log('Reference to summary', summaryContainerRef.current.innerText)}>
        Console Username
      </button>
      {side === "dark" && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
};

//   let content = (
//     <React.Fragment>
//       <CharPicker
//         side={side}
//         selectedChar={selectedCharacter}
//         onCharSelect={charSelectHandler}
//       />
//       <Character selectedChar={selectedCharacter} />
//       <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
//       <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
//       {side === "dark" && (
//         <button onClick={destructionHandler}>DESTROY!</button>
//       )}
//     </React.Fragment>
//   );

//   if (destroyed) {
//     content = <h1>Total destruction!</h1>;
//   }
//   return content;
// };


// export default ReactHooks;
