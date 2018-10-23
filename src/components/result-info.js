import React from 'react'
import '../styles.css'

import Image from './image'

export default class ResultInfo extends React.Component {

  getResult() {
    const { avarage } = this.props.data

    if (avarage <= 20) {
      return <span className="very-low"> muito baixa: { avarage }% </span>
    }

    if (avarage < 40) {
      return <span className="low"> baixa: { avarage }% </span>
    }

    if (avarage < 60) {
      return <span className="medium"> plausível: { avarage }% </span>
    }

    if (avarage < 80) {
      return <span className="high"> alta: { avarage }% </span>
    }

    return <span className="very-high"> muito alta: { avarage }% </span>
  }

  render() {
    const { images } = this.props.data
    return (
      <div className="result-info">
        <div className="images">
          {
            images.map((item, index) => (
              <div className="result-item" key={ index }>
                <Image src={ item.img } />
              </div>
            ))
          }
        </div>
        <div className="final-result">
          Probabilidade de conter sinal { this.getResult() }
        </div>
      </div>
    )
  }
}