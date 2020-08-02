import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import { Provider } from 'react-redux';
import Home from './Home';
import Loading from './Loading';
import createStore from '../redux/store';
import reducers from '../redux/reducers/count';

const store = createStore(reducers); // reducers 를 바탕으로 store 생성

const AsyncDynamicPAge = importedComponent(
	() => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
	{
		LoadingComponent: Loading,
	},
);
const AsyncNoMatch = importedComponent(() => import(/* webpackChunkName:'NoMatch' */ './NoMatch'), {
	LoadingComponent: Loading,
});

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/dynamic' component={AsyncDynamicPAge} />
						<Route component={AsyncNoMatch} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
