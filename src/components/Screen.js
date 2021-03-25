import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

function Screen() {
	const { screenText } = useContext(CalculatorContext);

	return (
		<div className="screen">
			<div className="entry"></div>
			<span className="screen__big">{screenText}</span>
		</div>
	);
}

export default Screen;
