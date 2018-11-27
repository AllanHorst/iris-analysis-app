import React from 'react'

import '../styles.css'

export default class InputFile extends React.Component {

  render() {
    const { file, handleChange } = this.props
    return (
      <div className="flex-column">
        <label className="label-input-file">{ this.props.label }</label>
        <div className="input-file-wrapper">
          <label className="file-name">{ file ? file.name : 'Selecione um arquivo' }</label>
          <input
            type="file"
            className="input-file"
            ref={ ref => this.inpuRef = ref }
            onChange={ e => handleChange(e.target.files[0]) } />
        </div>
      </div>
    )
  }
}

