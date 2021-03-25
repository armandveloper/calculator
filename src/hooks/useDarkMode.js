import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	const themeLS = localStorage.getItem('calculator:theme') || 'light';

	const [theme, setTheme] = useState(themeLS);

	const toggleTheme = (theme) => setTheme(theme);

	useEffect(() => {
		localStorage.setItem('calculator:theme', theme);
		if (theme === 'dark') {
			return document.body.classList.add('dark');
		}
		document.body.classList.remove('dark');
	}, [theme]);

	return [theme, toggleTheme];
};
