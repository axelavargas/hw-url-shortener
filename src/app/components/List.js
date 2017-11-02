import React from "react";
import PropTypes from 'prop-types'; // ES6
import "../styles/components/List.less"

export class List extends React.Component {

	onCopyLink (link) {
		const BASE_PATH = 'http://impraise-shorty.herokuapp.com/';
        let shortcode = link.shortcode;
		let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = BASE_PATH+shortcode;
		input.select();
		document.execCommand('copy');
		input.blur();
		input.remove();
	}

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
										<button onClick={this.onCopyLink.bind(null, link)}>Copy</button>{}
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