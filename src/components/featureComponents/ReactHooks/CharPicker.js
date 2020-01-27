import React, { Component } from 'react';

import './CharPicker.scss';

class CharPicker extends Component {
  state = { characters: [], isLoading: false };

  componentDidMount() {
    console.log("charPicker.js componentDidMount");
    console.log(
      'Sending Http request for List the characters ');
    this.setState({ isLoading: true });
    fetch('https://swapi.co/api/people')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(charData => {
        const selectedCharacters = charData.results.slice(0, 5);
        this.setState({
          characters: selectedCharacters.map((char, index) => ({
            name: char.name,
            id: index + 1
          })),
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    console.log('charPicker.js componentWillUnmount');
  }
  render() {
    let content = <p>Loading characters...</p>;

    if (
      !this.state.isLoading &&
      this.state.characters &&
      this.state.characters.length > 0
    ) {
      content = (
        <select
          onChange={this.props.onCharSelect}
          value={this.props.selectedChar}
          className={this.props.side}
        >
          {this.state.characters.map(char => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      );
    } else if (
      !this.state.isLoading &&
      (!this.state.characters || this.state.characters.length === 0)
    ) {
      content = <p>Could not fetch any data.</p>;
    }
    return content;
  }
}

export default CharPicker;

// // ===========================================================================================

// import React from "react";

// import "./CharPicker.scss";
// import { useHttp } from "../../hodComponents/http";

// const CharPicker = props => {
//   const [isLoading, charData] = useHttp("https://swapi.co/api/people", []);
//   const selectedCharacters = charData
//     ? charData.results.slice(0, 5).map((char, index) => ({
//         name: char.name,
//         id: index + 1
//       }))
//     : [];

//   let content = <p>Loading characters...</p>;

//   if (!isLoading && selectedCharacters && selectedCharacters.length > 0) {
//     content = (
//       <select
//         onChange={props.onCharSelect}
//         value={props.selectedChar}
//         className={props.side}
//       >
//         {selectedCharacters.map(char => (
//           <option key={char.id} value={char.id}>
//             {char.name}
//           </option>
//         ))}
//       </select>
//     );
//   } else if (
//     !isLoading &&
//     (!selectedCharacters || selectedCharacters.length === 0)
//   ) {
//     content = <p>Could not fetch any data.</p>;
//   }
//   return content;
// };

// export default CharPicker;
