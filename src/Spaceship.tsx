import { useState, useEffect, useCallback } from 'react';
import { extend, useAsset } from '@pixi/react';
import { type Size, type Texture, Sprite, Ticker } from 'pixi.js';

// import { audios } from "../config";

extend({ Sprite });

// Spaceship props interface
interface SpaceshipProps {
	x: number;
	y: number;
	disabled?: boolean;
	onDie: () => void;
	onUpdateY: (y: number) => void;
}

const Spaceship = ({
	x,
	y,
	disabled = false,
	onDie,
	onUpdateY,
	height,
}: SpaceshipProps & Size) => {
	const spaceshipTexture = useAsset('assets/spaceship.png') as Texture;
	// const {
	// 	assets: [spaceshipTexture],
	// 	isSuccess,
	// } = useAssets(["assets/spaceship.png"]);

	const [posY, setPosY] = useState(y);
	const [velocity, setVelocity] = useState(6);
	const gravity = 0.2;

	// // Handle jump logic
	const jump = useCallback(() => {
		// audios.wing.play();
		setVelocity(-6); // Negative velocity means the bird is jumping upwards
	}, []);

	// Handle keydown event for space bar jump
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === ' ') {
				jump();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [jump]);

	// Handle click event to jump
	useEffect(() => {
		window.addEventListener('click', jump);
		return () => {
			window.removeEventListener('click', jump);
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

	// Update parent's x and y state
	useEffect(() => {
		if (disabled) return;
		onUpdateY(posY);
	}, [posY, onUpdateY]);

	return (
		<sprite
			texture={spaceshipTexture}
			x={x}
			y={posY}
			width={60}
			height={40}
			anchor={0.5}
		/>
	);
};

export default Spaceship;
