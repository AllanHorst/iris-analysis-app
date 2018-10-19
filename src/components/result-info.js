import React from 'react'
import '../styles.css'

import Image from './image'

export default class ResultInfo extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
      <div className="result-info">
        <div className="images">
          {
            data.images.map((item, index) => (
              <div className="result-item" key={ index }>
                <Image src={ item.img } />
                <span>{ item.result }%</span>
              </div>
            ))
          }
        </div>
        <div className="result-numbers">

        </div>
      </div>
    )
  }
}