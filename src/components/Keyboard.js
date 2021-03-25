import Grid from '@material-ui/core/Grid';
import Key from './Key';

function Keyboard() {
	return (
		<Grid container spacing={0} className="keyboard">
			<Key
				text="AC"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--gray"
			/>
			<Key
				text="C"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--gray"
			/>
			<Key
				text="&#177;"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--gray"
			/>
			<Key
				text="%"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--gray"
			/>
			<Key text="7" className="keyboard__key-inner" />
			<Key text="8" className="keyboard__key-inner" />
			<Key text="9" className="keyboard__key-inner" />
			<Key
				text="&divide;"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--blue-alt"
			/>
			<Key text="4" className="keyboard__key-inner" />
			<Key text="5" className="keyboard__key-inner" />
			<Key text="6" className="keyboard__key-inner" />
			<Key
				text="&#x02A2F;"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--blue-alt"
			/>
			<Key text="1" className="keyboard__key-inner" />
			<Key text="2" className="keyboard__key-inner" />
			<Key text="3" className="keyboard__key-inner" />
			<Key
				text="&minus;"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--blue-alt"
			/>
			<Key text="0" className="keyboard__key-inner" />
			<Key text="." className="keyboard__key-inner" />
			<Key
				text="&#x0003D;"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--blue"
			/>
			<Key
				text="+"
				className="keyboard__key-inner keyboard__key--circle keyboard__key--blue-alt"
			/>
		</Grid>
	);
}

export default Keyboard;
