import NavigationBar from "./Components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AllCars from "./Pages/allCars";
import BrandsLanding from "./Pages/brandsLanding";
import Home from "./Pages/home";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/brands" component={BrandsLanding} />
					<Route path="/cars" component={AllCars} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
