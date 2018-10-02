import React from 'react'
import InputFile from 'input-file'
import '../styles.css'
import { http } from '../services/http'

export default class Home extends React.Component {

  handleSubmit(fileInput) {
    const file = fileInput.files[0]
    if (!file) return
    const config = {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    }
    http.post('/api/analyze', file, config)
  }

  render() {
    return (
      <div>
        <h1>
          IRIS ANALYSIS
        </h1>

        <div className="input-file-wrapper">
          <form>

            <InputFile handleSubmit={ files => this.handleSubmit(files) } />
          </form>
        </div>

      </div>
    )
  }
}