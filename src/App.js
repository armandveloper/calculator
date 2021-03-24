import Grid from '@material-ui/core/Grid';
import Key from './components/Key';

function App() {
	const theme = 'light';
	return (
		<div className="calculator">
			<header className="header">
				<span className="chip">Calculator</span>
				<button className="toggle--theme">
					{theme === 'light' ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="19.368"
							height="19.368"
							viewBox="0 0 19.368 19.368"
						>
							<path
								fill="#8c8c8c;"
								d="M12.855,2.25H11.009V5.017h1.846V2.25Zm5.581,1.889L16.776,5.8l1.293,1.293,1.66-1.66L18.436,4.139Zm-13,0L4.139,5.432,5.8,7.092,7.092,5.8l-1.66-1.66Zm6.5,2.261a5.534,5.534,0,1,0,5.534,5.534A5.55,5.55,0,0,0,11.934,6.4Zm9.684,4.613H18.851v1.846h2.767V11.013Zm-16.6,0H2.25v1.846H5.017V11.013Zm13.051,5.763-1.293,1.293,1.66,1.66,1.293-1.293-1.66-1.66Zm-12.269,0-1.66,1.66,1.293,1.293,1.66-1.66L5.8,16.776Zm7.055,2.075H11.009v2.767h1.846V18.851Z"
								transform="translate(-2.25 -2.25)"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12.682"
							height="14.19"
							viewBox="0 0 12.682 14.19"
						>
							<g class="dark">
								<path
									fill="#707070"
									class="b"
									d="M9.008,14.19a7.081,7.081,0,0,0,5.511-2.627.333.333,0,0,0-.32-.536A5.558,5.558,0,0,1,10.409.735a.333.333,0,0,0-.1-.616,7.1,7.1,0,1,0-1.3,14.072Z"
									transform="translate(-1.913)"
								/>
							</g>
						</svg>
					)}
				</button>
			</header>
			<div className="screen">
				<div className="entry">2+3-6</div>
				<span className="screen__big">0</span>
			</div>
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
					text="+/-"
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
		</div>
	);
}

export default App;
