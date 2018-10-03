import React from 'react'

import '../styles.css'

export default class InputFile extends React.Component {

  handleChange(file) {
    const name = file ? file.name : ''

    this.setState({ name })
    this.props.handleChange(file)
  }

  render() {
    return (
      <input
        type="file"
        ref={ ref => this.inpuRef = ref}
        onChange={ e => this.handleChange(e.target.files[0]) } />
    )
  }
}

