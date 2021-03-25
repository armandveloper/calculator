import { useDarkMode } from '../hooks/useDarkMode';

const sun = (
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
);

const moon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="12.682"
		height="14.19"
		viewBox="0 0 12.682 14.19"
	>
		<g className="dark">
			<path
				fill="#707070"
				className="b"
				d="M9.008,14.19a7.081,7.081,0,0,0,5.511-2.627.333.333,0,0,0-.32-.536A5.558,5.558,0,0,1,10.409.735a.333.333,0,0,0-.1-.616,7.1,7.1,0,1,0-1.3,14.072Z"
				transform="translate(-1.913)"
			/>
		</g>
	</svg>
);

function Header() {
	const [theme, toggleTheme] = useDarkMode();

	const handleTheme = () => {
		toggleTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className="header">
			<span className="chip">Calculator</span>
			<button className="toggle--theme" onClick={handleTheme}>
				{theme === 'light' ? sun : moon}
			</button>
		</header>
	);
}

export default Header;
