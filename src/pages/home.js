import React from 'react'
import '../styles.css'

import { http } from '../services/http'
import Form from '../components/form'
import ResultInfo from '../components/result-info'
export default class Home extends React.Component {

  state = {
    result: null,
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
    this.setState({
      [`${name}Error`]: null,
      [name]: null
    })

    http.post('/api/analyze', file, config).then(res => {
      const result = res.data

      if (result.error || result.images.length !== 4) {
        this.storeMessageError(name, result.error)
        return
      }
      this.setState({ [name]: result })
    }).catch(() => {
      this.storeMessageError(name)
    })
  }

  storeMessageError(name, message=null) {
    this.setState({
      [`${name}Error`]: message ? message : 'Erro ao processar imagem, tamanho recomendado(300x300)'
    })
  }

  clear() {
    this.setState({
      rightError: null,
      leftError: null,
      left: null,
      right: null,
      result: null
    })
  }

  render() {
    const { right, left,rightError, leftError } = this.state
    return (
      <div>
        <h1>
          IRIS ANALYSIS
        </h1>
        <Form
          handleSubmit={ data => this.handleSubmit(data)}
          clear={ () => this.clear() } />

        <div className="result-wrapper">
          <ResultInfo messageError={ rightError } data={ right } />
          <ResultInfo  messageError={ leftError} data={ left } />
        </div>

      </div>
    )
  }
}