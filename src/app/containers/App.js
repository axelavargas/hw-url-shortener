import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

import { shortenUrl } from "../actions/shortenedLinkActions";


import { ShortenLink } from "../components/ShortenLink";
import { List } from "../components/List";


class App extends React.Component {

	render () {
		
		return (
			<div>
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
	                        <ShortenLink shortenUrl={ () => this.props.shortenUrl("test")}/>
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
            dispatch(shortenUrl(url));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);