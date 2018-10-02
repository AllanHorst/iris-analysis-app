import React from 'react'
import FileDrop from 'react-file-drop'

import '../styles.css'

export default class InputFile extends React.Component {
  handleDrop = (files, event) => {
    console.log(files, event)
  }

  render() {
    return (

      <div className="input-file">
        <FileDrop onDrop={ this.handleDrop }>
          Drop some files here!
        </FileDrop>
      </div>
    )
  }
}

