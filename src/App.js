import Header from './components/Header';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';
import { CalculatorProvider } from './context/CalculatorContext';

function App() {
	return (
		<div className="calculator">
			<CalculatorProvider>
				<Header />
				<Screen />
				<Keyboard />
			</CalculatorProvider>
		</div>
	);
}

export default App;
