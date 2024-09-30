import React, { createContext, useContext, useState } from "react";
import { type Size } from "pixi.js";

// Define the shape of your context
interface PixiAppContextType {
	setDimensions: (width: number, height: number) => void;
}

// Create context
const PixiAppContext = createContext<(Size & PixiAppContextType) | undefined>(
	undefined
);

// Create provider component
export const PixiAppProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [width, setWidth] = useState(1200); // Default width
	const [height, setHeight] = useState(675); // Default height

	const setDimensions = (newWidth: number, newHeight: number) => {
		setWidth(newWidth);
		setHeight(newHeight);
	};

	return (
		<PixiAppContext.Provider value={{ width, height, setDimensions }}>
			{children}
		</PixiAppContext.Provider>
	);
};

// Hook for child components to access PixiApp dimensions
export const usePixiApp = () => {
	const context = useContext(PixiAppContext);
	if (context === undefined) {
		throw new Error("usePixiApp must be used within a PixiAppProvider");
	}
	return context;
};
