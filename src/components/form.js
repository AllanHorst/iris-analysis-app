import React from 'react'
import InputFile from 'input-file'
import '../styles.css'

export default class ResultInfo extends React.Component {

  state = {
    left: null,
    right: null
  }

  handleChange(name, file) {
    this.setState({ [name]: file })
  }

  render() {
    return (
      <div className="form">
        <div className="display-flex">
          <InputFile label="Olho Esquerdo" handleChange={ files => this.handleChange('left', files) } />
          <InputFile label="Olho Direito" handleChange={ files => this.handleChange('right', files) } />
        </div>

        <div className="display-flex">
          <button className="button" onClick={ () => this.setState({ left: null, right: null }) }>Limpar</button>
          <button className="button primary" onClick={ () => this.props.handleSubmit(this.state) }>Enviar</button>
        </div>

      </div>
    )
  }
}