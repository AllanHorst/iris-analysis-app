import React from 'react'
import InputFile from 'input-file'
import '../styles.css'
import { http } from '../services/http'

export default class Home extends React.Component {

  handleChange(file) {
    this.setState({ file })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { file } = this.state

    if (!file) return

    const config = {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }

    http.post('/api/analyze', file, config)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>
          IRIS ANALYSIS
        </h1>

        <div className="input-file-wrapper">
          <form onSubmit={ e => this.handleSubmit(e) }>
            <InputFile handleChange={ files => this.handleChange(files) } />
            <input type="submit" value="UPLOAD" />
          </form>
        </div>

      </div>
    )
  }
}