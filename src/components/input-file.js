import React from 'react'

import '../styles.css'

export default class InputFile extends React.Component {
  state = {}

  handleChange(file) {
    const name = file ? file.name : ''

    this.setState({ name })
    this.props.handleChange(file)
  }

  render() {
    return (
      <div className="flex-column">
        <label className="label-input-file">{ this.props.label }</label>
        <div className="input-file-wrapper">
          <label className="file-name">{ this.state.name || 'Selecione um arquivo' }</label>
          <input
            type="file"
            className="input-file"
            ref={ ref => this.inpuRef = ref }
            onChange={ e => this.handleChange(e.target.files[0]) } />
        </div>
      </div>
    )
  }
}

