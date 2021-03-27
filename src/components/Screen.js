import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

function Screen() {
	const { screenText, screenSmallText } = useContext(CalculatorContext);

	return (
		<div className="screen">
			<div className="screen__small">{screenSmallText}</div>
			<span className="screen__big">{screenText}</span>
		</div>
	);
}

export default Screen;
