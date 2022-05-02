import React from "react";

class NavigationLink extends React.Component {

	handleClick = () => {
		this.props.onClick(this.props.index);
	}

	render() {
		const { text, url, isActive } = this.props;

		return (
			<li><a href={url} className={isActive ? 'nav__link nav__link--active' : 'nav__link'} onClick={this.handleClick}>{text}</a></li>
		);
	}
}

export default NavigationLink;
