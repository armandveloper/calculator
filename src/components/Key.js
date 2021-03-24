import Grid from '@material-ui/core/Grid';

function Key({ text, className }) {
	return (
		<Grid
			// display="flex"
			// alignItems="center"
			className="keyboard__key"
			item
			xs={3}
		>
			<div className={className}>{text}</div>
		</Grid>
	);
}

export default Key;
