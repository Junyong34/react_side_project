import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/action/count';

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			localCount: 0,
		};
	}

	componentDidMount() {
		console.log('Component did mount.');
	}

	decreaseCount() {
		this.setState(prevState => ({
			localCount: prevState.localCount - 1,
		}));
	}

	increaseCount() {
		this.setState(prevState => ({
			localCount: prevState.localCount + 1,
		}));
	}

	render() {
		const { localCount } = this.state;
		const { storeCount, increaseStoreCount, decreaseStoreCount } = this.props;

		return (
			<>
				Class component
				<div>
					<div>{`localCount: ${localCount}`}</div>
					<div>{`storeCount: ${storeCount}`}</div>
				</div>
				<div
					onClick={() => {
						this.increaseCount();
						increaseStoreCount();
					}}
					onKeyDown={() => {
						this.decreaseCount();
						decreaseStoreCount();
					}}
					role='button'
					tabIndex={-1}
				>
					+
				</div>
				<div
					onClick={() => {
						this.decreaseCount();
						decreaseStoreCount();
					}}
				>
					-
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	storeCount: state.count,
});

const mapDispatchToProps = dispatch => ({
	increaseStoreCount: () => dispatch(actions.increaseCount()),
	decreaseStoreCount: () => dispatch(actions.decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
