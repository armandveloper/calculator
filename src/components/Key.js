import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { CalculatorContext } from '../context/CalculatorContext';

function Key({ text, className }) {
	const { determineAction } = useContext(CalculatorContext);

	const handleClick = ({ target }) => {
		determineAction(target.innerText);
	};

	return (
		<Grid className="keyboard__key" item xs={3}>
			<button onClick={handleClick} className={className}>
				{text}
			</button>
		</Grid>
	);
}

export default Key;
