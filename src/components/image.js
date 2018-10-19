import React from 'react'

export default props => (
  <img className="image" src={`data:image/png;base64, ${props.src}`} width="90px" alt="Red dot" />
)