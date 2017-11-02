import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

import { submitUrl, getShortCodeStats } from "../actions/shortenedLinkActions";


import { ShortenLink } from "../components/ShortenLink";
import { List } from "../components/List";
import app from "../styles/containers/App.less"


class App extends React.Component {

	constructor (params) {
		super(params);
		this.fetchAllStats = this.fetchAllStats.bind(this);
		this.state = {
			isFetching: false
		};
	}

	componentDidMount () {
        this.fetchAllStats();
        this.interval = setInterval(this.fetchAllStats, 5000);
	}

	componentWillUnmount () {
		clearInterval(this.interval);
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.links.length !==  nextProps.links.length) {
			this.setState({isFetching:false});
		}
	}

	fetchAllStats () {
        this.props.links.forEach(this.props.getStats);
    }


	render () {
		
		return (
			<div style={app}>
			    <div className="container">
	                <div className="row">
	                    <div className="col-xs-10 col-xs-offset-1">
							<h1>Shooooort</h1>
							<p> This link shortner with a long name </p>
						</div>
					</div>
	                <hr/>
	                <div className="row">
	                    <div className="col-xs-10 col-xs-offset-1">
	                        <ShortenLink shortenUrl = {this.props.shortenUrl} isFetching = {this.state.isFetching} setFetchingStatus = {(() => this.setState({isFetching:true}))} />
	                        <List links={this.props.links}/>
	                    </div>
	                </div>
            	</div>
            	
           	</div>			
							

		)
	}
}

const mapStateToProps = (state) => {
  return {
      links: state.shortenedLinkReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        shortenUrl: (url) => {
            dispatch(submitUrl(url));
        },
		getStats: (link) => {
            dispatch(getShortCodeStats(link))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);