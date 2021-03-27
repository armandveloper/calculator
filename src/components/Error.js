import { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import { CalculatorContext } from '../context/CalculatorContext';

function Error() {
	const { error, errorMsg } = useContext(CalculatorContext);

	return (
		<Snackbar open={error} autoHideDuration={2800}>
			<Box width="100%">
				<Alert variant="filled" severity="error">
					{errorMsg}
				</Alert>
			</Box>
		</Snackbar>
	);
}

export default Error;
