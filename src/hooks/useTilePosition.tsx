import { useState, useEffect } from "react";
import { Ticker } from "pixi.js";

/**
 * Custom hook to handle tile position with a speed multiplier.
 * @param speed - Speed multiplier for the tile position movement.
 * @returns x - The current x position of the tile.
 */
export function useTilePosition(speed: number = 1) {
	const [x, setX] = useState(0);

	useEffect(() => {
		// Function to update the x position
		const update = (ticker: Ticker) => {
			setX((prevX) => prevX + ticker.deltaTime * 3.5 * speed);
		};

		// Add the update function to the PIXI Ticker
		Ticker.shared.add(update);

		// Cleanup when the component is unmounted or hook is re-run
		return () => {
			Ticker.shared.remove(update);
		};
	}, [speed]); // Dependency on the speed value

	return x;
}
