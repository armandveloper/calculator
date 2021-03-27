import { CalculatorProvider } from './context/CalculatorContext';
import Header from './components/Header';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';
import Error from './components/Error';

function App() {
	return (
		<div className="calculator">
			<CalculatorProvider>
				<Header />
				<Screen />
				<Keyboard />
				<Error />
			</CalculatorProvider>
		</div>
	);
}

export default App;
