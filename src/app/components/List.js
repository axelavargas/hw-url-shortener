import React from "react";
import PropTypes from 'prop-types'; // ES6

export class List extends React.Component {

	render() {
		return (
			<div>
				<h2> Previously shortenned by you </h2>
				<a onClick={() => this.clearHistory() }> Clear history </a>
				 <table className="table">
					<thead>
						<tr>
							<th>Link</th>
							<th>Visit</th>
							<th>Last Visit</th>
						</tr>
					</thead>
					<tbody>
						{this.props.links.map((link, i) => {
							return (
								<tr key={i}>
									<td>
										{link.shortcode}
									</td>
									<td>
									</td>
									<td>
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
	links: PropTypes.array
};