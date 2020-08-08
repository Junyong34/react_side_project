import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../redux/action/count';

const CountFC = () => {
	const dispatch = useDispatch();
	const [localCount, setLocalCount] = useState(0);

	const { count: storeCount } = useSelector(state => state);

	useEffect(() => {
		console.log('Component did mount.');
	}, []);

	const increaseCount = useCallback(() => {
		setLocalCount(localCount + 1);
		dispatch(actions.increaseCount());
	}, [localCount, dispatch]);

	const decreaseCount = useCallback(() => {
		setLocalCount(localCount - 1);
		dispatch(actions.decreaseCount());
	}, [localCount, dispatch]);

	return (
		<>
			Function component
			<div>
				<div>{`localCount: ${localCount}`}</div>
				<div>{`storeCount: ${storeCount}`}</div>
			</div>
			<div onClick={increaseCount} onKeyDown={increaseCount} role='button' tabIndex={0}>
				+
			</div>
			<div onClick={decreaseCount} onKeyDown={increaseCount} role='button' tabIndex={-1}>
				-
			</div>
		</>
	);
};

export default CountFC;
