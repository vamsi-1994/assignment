import {Component} from 'react'

import './index.css'

class QueueReactApp extends Component {
  state = {arrayValue: []}

  onEnqueue = () => {
    const {arrayValue} = this.state
    if (arrayValue === []) {
      this.setState({arrayValue: arrayValue.push(1)})
    } else {
      const tempArr = [...arrayValue]
      tempArr.push(tempArr.length + 1)
      this.setState({arrayValue: tempArr})
    }
  }

  deleteItem = () => {
    const {arrayValue} = this.state
    const tempArr = [...arrayValue]
    this.setState({arrayValue: tempArr.slice(1)})
  }

  showFirst = () => {
    const {arrayValue} = this.state
    const tempArr = [...arrayValue]
    alert(tempArr[tempArr.length - 1])
  }

  isEmpty = () => {
    const {arrayValue} = this.state
    if (arrayValue.length === 0) {
      alert('isEmpty')
    }
  }

  isFull = () => {
    const {arrayValue} = this.state
    if (arrayValue.length === 5) {
      alert('isFull')
    }
  }

  onClearAll = () => {
    const {arrayValue} = this.state
    this.setState({arrayValue: []})
  }

  render() {
    const {arrayValue} = this.state
    return (
      <div className="container">
        <h1 className="heading">Queue React App</h1>
        <div className="sub-container">
          <button className="button1" type="button" onClick={this.onEnqueue}>
            Enqueue
          </button>
          <button className="button1" type="button" onClick={this.deleteItem}>
            Dequeue
          </button>
          <button className="button1" type="button" onClick={this.showFirst}>
            Front
          </button>
          <button className="button1" type="button" onClick={this.isEmpty}>
            Is Empty
          </button>
          <button className="button1" type="button" onClick={this.isFull}>
            Is Full
          </button>

          <label>
            MAX ENTRY <input name="myInput" value="5" />
          </label>
          <button className="button1" type="button" onClick={this.onClearAll}>
            Clear All
          </button>
        </div>

        <div className="bottom-part">
          {arrayValue.map(value => (
            <div className="value">{value}</div>
          ))}
        </div>
      </div>
    )
  }
}
export default QueueReactApp
