import React from 'react'
import FileDrop from 'react-file-drop'

import '../styles.css'

export default class InputFile extends React.Component {

  handleChange(file) {
    const name = file ? file.name : ''

    this.setState({ name })
    this.props.handleChange(file)
  }

  render() {
    return (
      <div className="input-file">
        <FileDrop onDrop={ files => this.handleChange(files[0]) }>
          Drop some files here!
          <input type="file" ref={ ref => this.inpuRef = ref} onChange={ e => this.handleChange(e.target.files[0]) } />
        </FileDrop>
      </div>
    )
  }
}

