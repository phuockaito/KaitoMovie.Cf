import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../style.css';
import Header from '../Compoment/Header/Header';
import NavMenu from '../Compoment/NavMenu/NavMenu';
import Routes from '../RoutesDom/Routes';
import Footer from '../Compoment/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Actives from '../Actions/index';
const App = () => {
	const dispatch = useDispatch();
	const GetMoviesAPI = () => dispatch(Actives.GetAPIAllMoviesRequest());
	useEffect(() => {
		GetMoviesAPI();
		AOS.init({
			duration: 500,
			once: true,
			initClassName: 'aos-init'
		})
	},[])
	//
	const ShowContentMenu = (Routes) => {
		var result = null;
		if (Routes.length > 0) {
			result = Routes.map((route, index) => (
				<Route
					key={index}
					exact={route.exact}
					path={route.path}
					render={props => <route.main {...props} />}
				/>
			))
		};
		return result;
	}
	return (

		<Router>
			<button className="scrollTop">
				<i className="fa fa-angle-up"></i>
			</button>
			<div className="Conntent">
				<div className="Header-Conntent">
					<Header />
					<NavMenu />
				</div>
			</div>
			<Switch>
				{ShowContentMenu(Routes)}
				<Redirect to="/" from="/" />
			</Switch>
			<Footer/>
		</Router>

	)
};
export default App;
