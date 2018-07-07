import React, { Component } from 'react';
import Password from './Password';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Password complexity</h1>
        <p>
          Pour une sécurité optimale, votre mot de passe doit contenir plus de 6 caractères<br />
          et doit comprendre minuscule(s), majuscule(s) et caractère(s) spéciaux.
        </p>
        <Password />
      </div>
    );
  }
}

export default App;
