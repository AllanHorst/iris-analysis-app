import React from 'react'
import InputFile from 'input-file'
import '../styles.css'

export default class ResultInfo extends React.Component {

  state = {
    left: null,
    right: null,
  }

  handleChange(name, file) {
    this.setState({ [name]: file })
  }

  clear() {
    this.setState({
      right: null,
      left: null
    })
    this.props.clear()
  }

  render() {
    return (
      <div className="form">
        <div className="display-flex">
          <InputFile label="Olho Direito" file={ this.state.right } handleChange={ files => this.handleChange('right', files) } />
          <InputFile label="Olho Esquerdo" file={ this.state.left } handleChange={ files => this.handleChange('left', files) } />
        </div>

        <div className="display-flex">
          <button className="button" onClick={ () => this.clear() }>Limpar</button>
          <button className="button primary" onClick={ () => this.props.handleSubmit(this.state) }>Enviar</button>
        </div>

      </div>
    )
  }
}