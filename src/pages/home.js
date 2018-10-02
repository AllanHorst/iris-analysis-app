import React from 'react'
import InputFile from 'input-file'
import '../styles.css'
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>
					IRIS ANALYSIS
				</h1>

				<div className="input-file-wrapper">
					<InputFile />
				</div>

			</div>
		)
	}
}