import { useCallback, useEffect, useState } from 'react';
import { digits, operators, validKeys } from '../helpers/keyboard';

export const useCalculator = () => {
	const [screenText, setScreenText] = useState('');

	const printDigit = (digit) => {
		setScreenText((text) => {
			// Si ya hay un punto no coloca otro
			if (digit === '.' && text.includes('.')) {
				return text;
			}
			return text + digit;
		});
	};

	const calculate = (operator) => {
		console.log('Doing operation:', operator);
	};

	const clearAll = () => {
		setScreenText('');
	};

	const clearLastChar = () => {
		setScreenText((text) => text.substring(0, text.length - 1));
	};

	const determineAction = useCallback((key) => {
		const isDigit = digits.includes(key);
		if (isDigit) {
			return printDigit(key);
		}
		const isOperator = operators.includes(key);
		if (isOperator) {
			return calculate(key);
		}
		// Para limpiar
		if (key === 'AC' || key === 'Escape') {
			return clearAll();
		}
		clearLastChar();
	}, []);

	useEffect(() => {
		const handleKeyUp = (e) => {
			const { key } = e;
			const isValid = validKeys.includes(key);
			if (!isValid) return;

			determineAction(key);
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [determineAction]);

	return {
		screenText,
		determineAction,
	};
};
