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
		this.setState({ url: '' });
		this.props.setFetchingStatus();
    };

    showLoading = () => {
    	if(this.props.isFetching) {
    		return <span>loading...</span>;
		}
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
						<button className="btn btn-lg" type="submit">
							Shorten url
						</button>
						{this.showLoading()}
					</div>
				</form>
			</div>
			)
	}
}

ShortenLink.propTypes = {
    shortenUrl: PropTypes.func.isRequired,
    setFetchingStatus: PropTypes.func.isRequired,
    isFetching: PropTypes.bool
};