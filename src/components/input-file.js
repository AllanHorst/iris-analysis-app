import React from 'react'
import FileDrop from 'react-file-drop'

import '../styles.css'

export default class InputFile extends React.Component {

  render() {
    return (

      <div className="input-file">
        <input type="file" onChange={ e => this.props.handleSubmit(e.target) } />
        {/* <FileDrop onDrop={ files => this.props.handleSubmit(files) }>
          Drop some files here!
        </FileDrop> */}
      </div>
    )
  }
}

