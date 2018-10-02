import React from 'react'
import { render } from 'react-dom'

import Home from './pages/home'
import './styles'

export default class App extends React.Component {
	render() {
		return (
			<Home />
		)
	}
}

render(<App />, document.getElementById('main'))