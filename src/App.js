import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.getTheme(),
    };
    this.handleRadio=this.handleRadio.bind(this)
    this.getTheme=this.getTheme.bind(this)
  }

  getTheme(){
  return JSON.parse(localStorage.getItem("theme")) || 'light'
  }
  handleRadio(event){
    const value = event.target.value;
    this.setState({
      theme : value
    })
  }
  componentDidUpdate(){
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  }


  render() {
    let theme = this.state.theme;
    
    return (
      <div className={`App ${theme}`}>
        <input
          onChange={this.handleRadio}
          type="radio"
          name="theme"
          value="light"
          checked={this.state.theme === "light"}
        />
        <label>Light</label>
        <input
          onChange={this.handleRadio}
          type="radio"
          name="theme"
          value="dark"
          checked={this.state.theme === "dark"}
        />
        <label>Dark</label>
      </div>
    );
  }
}

export default App;
