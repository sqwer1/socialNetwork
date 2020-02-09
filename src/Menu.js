import React from 'react';
import classes from './App.module.css';

import {NavLink} from 'react-router-dom';

const Menu = (props) => (
	

	<div className={classes.Menu}>
		<div className={classes.MenuG}>
			<NavLink to={props.track} activeClassName={classes.active}>{props.name}</NavLink>
		</div>

	</div>
);

export default Menu;
