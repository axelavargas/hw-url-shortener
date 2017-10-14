import React from "react";
import PropTypes from 'prop-types'; // ES6
import "../styles/components/List.less"

export class List extends React.Component {

	render() {
		return (
			<div>
				<h2> Previously shortenned by you </h2>
				 <table className="table table-striped">
					<thead>
						<tr>
							<th>Link</th>
							<th>Visit</th>
							<th>Last Visit</th>
							<th>Visit Url</th>

						</tr>
					</thead>
					<tbody>
						{this.props.links.map((link, i) => {
							return (
								<tr key={i}>
									<td>
										{link.shortcode}
										<p className="url">
											url: {link.url}
										</p>
									</td>
									<td>
                                        {link.redirectCount}
									</td>
									<td>
                                        {link.lastSeenDate || "NONE"}
									</td>
									<td>
										<a href={`http://impraise-shorty.herokuapp.com/${link.shortcode}`} onClick={this.props.onUpdateLink.bind(null, link)} target="_blank">Visit</a>{}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

List.propTypes = {
	links: PropTypes.array,
	onUpdateLink: PropTypes.func
};