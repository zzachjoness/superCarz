import NavigationBar from "./Components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Brands from "./Pages/brands";
import Home from "./Pages/home";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/brands" exact component={Brands} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
