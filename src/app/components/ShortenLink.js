import React from "react";
import PropTypes from 'prop-types'

export class ShortenLink extends React.Component {

	static propTypes = {
        shortenUrl: PropTypes.func.isRequired,
    };

    state = {
        url: ''
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.shortenUrl(this.state.url);
			this.setState({ url: '' })
    };

    handleChange = e => {
        this.setState({ url: e.target.value })
    };

	render() {

        return (
			<div style={{marginBottom: '8%'}}>
				<form name="shortenUrl" onSubmit={this.handleSubmit} className="form-inline">
					<div className="form-group">
						<input type="text"
							   className="form-control input-lg"
							   autoFocus="true"
							   onChange={this.handleChange}
							   value={this.state.url}
						/>
						<button style={{marginLeft: '20px', backgroundColor: '#EB4A42', color:'#FFFFFF'}} className="btn btn-lg" type="submit">
							Shorten url
						</button>
					</div>
				</form>
			</div>
			)
	}
}
