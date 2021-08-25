import NavigationBar from "./Components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/home";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Home />
		</div>
	);
}

export default App;
