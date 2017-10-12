import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

import { submitUrl, getShortCodeStats } from "../actions/shortenedLinkActions";


import { ShortenLink } from "../components/ShortenLink";
import { List } from "../components/List";


class App extends React.Component {

	render () {
		
		return (
			<div style={{color: '#555555'}}>
			    <div className="container">
	                <div className="row">
	                    <div className="col-xs-10 col-xs-offset-1">
							<h1 style={{color: '#EB4A42', textDecoration:'underline'}}>Shooooort</h1>
							<p> This link shortner with a long name </p>
						</div>
					</div>
	                <hr/>
	                <div className="row">
	                    <div className="col-xs-10 col-xs-offset-1">
	                        <ShortenLink shortenUrl = {this.props.shortenUrl}/>
	                        <List links={this.props.links} onUpdateLink={this.props.onUpdateLink}/>
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
        onUpdateLink : (data) => {
        	//Add small delay to get the updated link
        	setTimeout(() => {
                    dispatch(getShortCodeStats(data));
                }
        	, 2000);
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);