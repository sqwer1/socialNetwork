import React from 'react';
import classes from '../App.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => (
	
	<div className={classes.Top}>
		<div className={classes.TopG}>
			<div className={classes.TopH}>
				Social network
			</div>
			<div className={classes.loginBlock}>
					{props.isAuth
						? <div className={classes.loginBlockDiv}>{props.login} - <button className={classes.button1} onClick={props.logout}>Log out</button></div>
						: <NavLink to={'/login'}><button className={classes.button1}>Login</button></NavLink>}
			</div>
		</div>
	</div>
);

export default Header;
