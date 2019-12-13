import React, { Component } from 'react';
import { lang } from './lang'
import './App.css';
import LangaugeSelector from './components/LangaugeSelector'
import Card from './components/Card';

let items = [
  { value: 0, label: "English" },
  { value: 1, label: "हिन्दी" },
  { value: 2, label: "中文" },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: lang,
      index: 0
    }
    this._onChange = this._onChange.bind(this)
  }

  _onChange(value) {
    if (value == 0) {
      this.setState({ index: 0 })
    } else if (value == 1) {
      this.setState({ index: 1 })
    } else {
      this.setState({ index: 2 })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 align="center">React Multi Langauge</h1>
          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <LangaugeSelector
              items={items}
              name="opt-group"
              value={0}
              className="radio-group"
              onUpdate={this._onChange} />
          </div>
          <div align="center">
            <Card
              name={this.state.lang[this.state.index].name}
              occupation={this.state.lang[this.state.index].occupation} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
