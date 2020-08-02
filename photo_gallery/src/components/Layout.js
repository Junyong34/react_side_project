import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
	return (
		<Container>
			<Link to='/'>
				<Header as='h1' className={h1}>
					리액트 연습장
				</Header>
			</Link>
			{children}
			<Divider />
			<p className={pullRight}>
				Made with <Icon name='heart' color='red' /> DevPark
			</p>
		</Container>
	);
};
// Layout.propTypes = {
// 	children: PropTypes.element.isRequired,
// };

export default Layout;
