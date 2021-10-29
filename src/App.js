import "./App.css";
import CatList from "./features/CatList";
import Header from "./Header";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Header />
				<CatList />
			</div>
		</div>
	);
}

export default App;
