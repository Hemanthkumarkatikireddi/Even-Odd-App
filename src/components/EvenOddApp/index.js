// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, number: 'Even'}

  incrementClick = () => {
    const {randomNumber, number} = this.state

    const s = Math.ceil(Math.random() * 100)
    if (randomNumber >= 0 && number) {
      this.setState(() => ({randomNumber: s}))

      if (s % 2 === 0) {
        this.setState(() => ({number: 'Even'}))
      } else {
        this.setState(() => ({number: 'Odd'}))
      }
    }
  }

  render() {
    const {randomNumber, number} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="description">
            <h1 className="heading-count">Count {randomNumber}</h1>

            <p className="heading-description">Count is {number}</p>
            <button
              type="button"
              className="button"
              onClick={this.incrementClick}
            >
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
