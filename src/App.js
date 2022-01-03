import NavigationBar from "./Components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarsLanding from "./Pages/carsLanding";
import BrandsLanding from "./Pages/brandsLanding";
import Home from "./Pages/home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/Functions/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavigationBar />
				<ScrollToTop />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/brands" component={BrandsLanding} />
					<Route path="/cars" component={CarsLanding} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
