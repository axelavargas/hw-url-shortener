import React from "react";

export class ShortenLink extends React.Component {
	render() {
		return (
				<div>
					<input type="text" className="shorten-link"></input>
					<a href="#" className="btn btn-primary" onClick={() => this.props.shortenUrl(this.props.url)}> Shorten this link </a>
				</div>
			)
	}
}