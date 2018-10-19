import React from 'react'
import '../styles.css'

import { http } from '../services/http'
import Form from '../components/form'
export default class Home extends React.Component {

  state = {
    result: null
  }

  handleSubmit(data) {
    const { right, left } = data
    this.sendImage(right, 'right')
    this.sendImage(left, 'left')
  }

  sendImage(file, name) {
    if (!file) return

    const config = {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }
    console.log(file)

    http.post('/api/analyze', file, config).then(res => {
      const result = res.data
      this.setState({ [name]: result })
    })
  }

  render() {
    const { right, left } = this.state
    return (
      <div>
        <h1>
          IRIS ANALYSIS
        </h1>
        <Form handleSubmit={ data => this.handleSubmit(data)} />
      </div>
    )
  }
}