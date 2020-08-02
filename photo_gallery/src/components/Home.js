import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Layout from './Layout';
import CountComponent from './reduxTest/Count';
import CountFCComponent from './reduxTest/CountFC';

const Home = () => {
	return (
		<Layout>
			<Grid stackable columns={2}>
				<Grid.Row>
					<Grid.Column>
						<Link to='/dynamic'>Navigate to Dynamic Page</Link>
					</Grid.Column>
					<CountComponent />
					<CountFCComponent />
					<Grid.Column />
				</Grid.Row>
			</Grid>
		</Layout>
	);
};

export default Home;
