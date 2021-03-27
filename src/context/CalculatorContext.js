import { createContext } from 'react';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const { screenText, screenSmallText, determineAction } = useCalculator();

	return (
		<CalculatorContext.Provider
			value={{ screenText, determineAction, screenSmallText }}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
