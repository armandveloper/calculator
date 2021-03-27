import { createContext } from 'react';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const {
		screenText,
		screenSmallText,
		determineAction,
		error,
		errorMsg,
	} = useCalculator();

	return (
		<CalculatorContext.Provider
			value={{
				screenText,
				determineAction,
				screenSmallText,
				error,
				errorMsg,
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
