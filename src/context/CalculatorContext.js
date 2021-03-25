import { createContext } from 'react';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const { screenText, determineAction } = useCalculator();

	return (
		<CalculatorContext.Provider value={{ screenText, determineAction }}>
			{children}
		</CalculatorContext.Provider>
	);
};
