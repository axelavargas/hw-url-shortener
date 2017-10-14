import React from "react";
import PropTypes from 'prop-types'
import "../styles/components/shortenLink.less"

export class ShortenLink extends React.Component {
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
			<div>
				<form name="shortenUrl" onSubmit={this.handleSubmit} className="form-inline">
					<div className="form-group">
						<input type="text"
							   className="form-control input-lg"
							   autoFocus="true"
							   onChange={this.handleChange}
							   value={this.state.url}
						/>
						<button className="btn btn-lg disabled" type="submit">
							Shorten url
						</button>
					</div>
				</form>
			</div>
			)
	}
}

ShortenLink.propTypes = {
    shortenUrl: PropTypes.func.isRequired
};