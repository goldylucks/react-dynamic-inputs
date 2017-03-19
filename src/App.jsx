import React, { Component } from 'react'

class App extends Component {

  state = {
    inputCount: 3
  }

  addInput = () => {
    this.setState({
      inputCount: this.state.inputCount + 1,
    })
  }

  render () {
    return (
      <div>
        <h1>Dynamic form DEMO</h1>
        <div className="container">
          <div className="inputs-container">
            { this.renderCofoudnersFields() }
            <button onClick={ this.addInput }>
              Add input field
            </button>
          </div>
          <div className="state-container">
            <h2>State</h2>
            <pre>{ JSON.stringify(this.state, null, 2) }</pre>
          </div>
        </div>
      </div>
    )
  }

  renderCofoudnersFields () {
    return [...Array(this.state.inputCount)].map((dummy, idx) => 
      <input
        key={ idx }
        onChange={ evt => this.setState({ [`input${idx}`]: evt.target.value }) }
        placeholder={ `Input ${idx + 1}` }
        value={ this.state[`input${idx}`] }
      />
    )
  }
}

export default App
