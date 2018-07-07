import React, { Component } from 'react';

class Password extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password : '',
      security: '',
      disableSubmit: true
    }

    this.testPassword = this.testPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  testPassword(passToTest) {
    
    if (passToTest.length <= 6) {
      this.setState({
        security : 'weak'
      });
    }
    if (passToTest.length > 6 && /[a-zA-Z]/g.test(passToTest)) {
      this.setState({
        security : 'medium',
        disableSubmit : false
      });
    }
    if (passToTest.length > 6 && /[a-zA-Z]/g.test(passToTest) && /\W/g.test(passToTest)) {
      this.setState({
        security : 'strong',
        disableSubmit : false
      });
    }
  }

  handleChange(e) {
    this.testPassword(e.target.value);

    this.setState({
      password : e.target.value
    });
  }

  handleSubmit(event) {
    alert(`AHAHAHAH je connais ton mot de passe : ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    let message;

    if (this.state.security === 'weak') {
      message = 'Mot de passe faible'
    }
    if (this.state.security === 'medium') {
      message = 'Mot de passe moyen'
    }
    if (this.state.security === 'strong') {
      message = 'Mot de passe fort'
    }

    return (
      <div className="Password">
        <form onSubmit={this.handleSubmit}>
          <input type="password" name="password" placeholder="mot de passe"  onChange={ this.handleChange }/>
          <button id="button" type="submit" disabled={ this.state.disableSubmit }>Valider</button>
          <div className={this.state.security}>
            { message }
          </div>
        </form>
      </div>
    );
  }
}

export default Password;