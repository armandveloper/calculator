import { useCallback, useEffect, useState } from 'react';
import { digits, operators, validKeys } from '../helpers/keyboard';

export const useCalculator = () => {
	const [screenText, setScreenText] = useState('');
	const [screenSmallText, setSmallText] = useState('');
	const [shouldClearText, setShouldClearText] = useState(false);

	const [errorInfo, setErrorInfo] = useState({
		error: false,
		errorMsg: null,
	});

	const closeToast = () => {
		setTimeout(() => {
			setErrorInfo({
				error: false,
				errorMsg: null,
			});
		}, 2800);
	};

	const printDigit = useCallback(
		(digit) => {
			setScreenText((text) => {
				// Decide si limpia el texto grande para colocar el nuevo número
				if (shouldClearText) {
					setShouldClearText(false);
					return digit;
				}

				// Si ya hay un punto no coloca otro
				if (digit === '.' && text.includes('.')) return text;
				return text + digit;
			});
		},
		[shouldClearText]
	);

	const toggleSign = () => {
		setScreenText((text) => {
			// Si tiene el signo menos lo quita para convertir a positivo. Si no lo concatena para pasar de + a -
			return text[0] === '-' ? text.replace('-', '') : '-' + text;
		});
	};

	const printResult = (result, sign) => {
		if (sign === '=') {
			setSmallText('');
			setScreenText(result.toString());
			return;
		}
		setSmallText(result + sign);
		setScreenText(result.toString());
		setShouldClearText(true);
	};

	const doOperation = useCallback(
		(operator) => {
			let result;
			const pendingOp = +screenSmallText.substring(
				0,
				screenSmallText.length - 1
			);
			switch (operator) {
				case '+':
					result = pendingOp + +screenText;
					break;
				case '-':
					result = pendingOp - +screenText;

					break;
				case '⨯':
					result = pendingOp * +screenText;

					break;
				case '÷':
					if (+screenText === 0) {
						clearAll();
						setErrorInfo({
							error: true,
							errorMsg: "Can't divide by 0",
						});
						closeToast();
						return '';
					}
					result = pendingOp / +screenText;

					break;
				case '%':
					result = (pendingOp / 100) * +screenText;
					break;
				default:
			}
			return result;
		},
		[screenText, screenSmallText]
	);

	const calculate = useCallback(
		(operator) => {
			let result;
			// Si solo hay un punto no hace nada
			if (screenText === '.') return;
			switch (operator) {
				case 'Enter':
				case '=':
					result = screenSmallText
						? doOperation(
								screenSmallText[screenSmallText.length - 1]
						  )
						: !screenSmallText && screenText
						? +screenText
						: '';
					printResult(result, '=');
					break;
				case '±':
					toggleSign();
					break;
				case '+':
					// Quita el último operador del final
					result =
						+screenSmallText.substring(
							0,
							screenSmallText.length - 1
						) + +screenText;
					printResult(result, '+');
					break;
				case '−':

				case '-':
					if (!screenSmallText) {
						result = +screenText;
					} else {
						// Quita el último operador del final
						result =
							+screenSmallText.substring(
								0,
								screenSmallText.length - 1
							) - +screenText;
					}
					printResult(result, '-');
					break;
				case '⨯':
				case '*':
					if (!screenSmallText) {
						result = +screenText;
					} else {
						// Quita el último operador del final
						result =
							+screenSmallText.substring(
								0,
								screenSmallText.length - 1
							) * +screenText;
					}
					printResult(result, '⨯');
					break;
				case '÷':
				case '/':
					if (!screenSmallText) {
						result = +screenText;
					} else {
						// Si intenta divide por 0
						if (+screenText === 0) {
							clearAll();
							return;
						}
						// Quita el último operador del final
						result =
							+screenSmallText.substring(
								0,
								screenSmallText.length - 1
							) / +screenText;
					}
					printResult(result, '÷');
					break;
				case '%':
					// Si aún no hay un número solo coloca el valor
					if (!screenSmallText) {
						result = +screenText;
					} else {
						result =
							(+screenSmallText.substring(
								0,
								screenSmallText.length - 1
							) /
								100) *
							+screenText;
					}
					printResult(result, '%');

					break;
				default:
			}
		},
		[screenText, screenSmallText, doOperation]
	);

	const clearAll = () => {
		setScreenText('');
		setSmallText('');
		setShouldClearText(false);
	};

	const clearLastChar = () => {
		setScreenText((text) => text.substring(0, text.length - 1));
	};

	const determineAction = useCallback(
		(key) => {
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
		},
		[calculate, printDigit]
	);

	useEffect(() => {
		const handleKeyUp = (e) => {
			e.target.blur();
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
		screenSmallText,
		error: errorInfo.error,
		errorMsg: errorInfo.errorMsg,
	};
};
