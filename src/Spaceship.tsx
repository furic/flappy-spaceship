import { useState, useEffect, useCallback } from "react";
import { extend, useAssets } from "@pixi/react";
import { type Size, Sprite, Ticker } from "pixi.js";

// import { audios } from "../config";

extend({ Sprite });

// Spaceship props interface
interface SpaceshipProps {
	x: number;
	y: number;
	disabled?: boolean;
	onDie: () => void;
	onUpdateX: (x: number) => void;
	onUpdateY: (y: number) => void;
}

const Spaceship = ({
	x,
	y,
	disabled = false,
	onDie,
	onUpdateX,
	onUpdateY,
	width,
	height,
}: SpaceshipProps & Size) => {
	const {
		assets: [spaceshipTexture],
		isSuccess,
	} = useAssets(["assets/spaceship.png"]);

	const [posX, setPosX] = useState(x);
	const [posY, setPosY] = useState(y);
	const [velocity, setVelocity] = useState(6);
	const gravity = 0.2;

	// // Handle jump logic
	const jump = useCallback(() => {
		// audios.wing.play();
		setVelocity(-6); // Negative velocity means the bird is jumping upwards
	}, []);

	// Handle keydown event for spacebar jump
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === " ") {
				jump();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [jump]);

	// Handle click event to jump
	useEffect(() => {
		window.addEventListener("click", jump);
		return () => {
			window.removeEventListener("click", jump);
		};
	}, [jump]);

	// Update spaceship's position and apply gravity with PIXI Ticker
	useEffect(() => {
		if (disabled) return;
		
		const ticker = Ticker.shared;

		const update = (ticker: Ticker) => {
			setPosY((prevY) => {
				const newY = prevY + velocity * ticker.deltaTime;
				if (newY > height + 20) {
					// Hitting the ground
					//   audios.hit.play();
					onDie();
					// return height + 20; // Clamp to ground level
					disabled = true;
					return 150;
				}
				if (newY < 10) {
					// Hitting the ceiling
					return 10;
				}
				return newY;
			});
			setVelocity((prevVel) => prevVel + gravity * ticker.deltaTime);
		};

		ticker.add(update);

		return () => {
			ticker.remove(update);
		};
	}, [disabled, velocity, onDie]);

	// // Update parent's x and y state
	useEffect(() => {
		if (disabled) return;
		onUpdateX(posX);
		onUpdateY(posY);
	}, [posX, posY, onUpdateX, onUpdateY]);

	return (
		isSuccess && (
			<sprite
				texture={spaceshipTexture}
				x={posX}
				y={posY}
				width={60}
				height={40}
				anchor={0.5}
			/>
		)
	);
};

export default Spaceship;
