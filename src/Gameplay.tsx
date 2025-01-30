import { useState, useEffect, useCallback, useRef, useImperativeHandle, forwardRef } from "react"; // prettier-ignore
import { type Size, Rectangle } from "pixi.js";

import { useTilePosition } from "./hooks/useTilePosition";

// import { audios } from "../config";
import Spaceship from "./Spaceship";
import Pipes from "./Pipes";
import Score from "./Score";

const SPACESHIP_POSITION = { x: 150, y: 150 };
const PIPE_DISTANCE = 300;

interface Pipe {
	x: number;
	y: number;
}

interface GameplayProps {
	onGameEnd: () => void;
}

const Gameplay = forwardRef(
	({ width, height, onGameEnd }: Size & GameplayProps, ref) => {
		const groundX = useTilePosition();
		const prevXRef = useRef(groundX); // Use useRef to store prevX across renders
		const [pipes, setPipes] = useState<Pipe[]>([]);
		const [spaceshipX, setSpaceshipX] = useState<number>(SPACESHIP_POSITION.x);
		const [spaceshipY, setSpaceshipY] = useState<number>(SPACESHIP_POSITION.y);
		const [gameOver, setGameOver] = useState<boolean>(false);
		const [score, setScore] = useState<number>(0);
		const [gameStarted, setGameStarted] = useState<boolean>(false); // track game start

		// Function to spawn a pipe
		const spawnPipe = useCallback((x: number) => {
			setPipes((prevPipes) => [
				...prevPipes,
				{ x, y: height * 0.22 + Math.random() * (height * 0.56) },
			]);
		}, []);

		// Initialize the first pipe when game starts
		useEffect(() => {
			if (gameStarted) {
				spawnPipe(width);
			}
		}, [gameStarted, spawnPipe]);

		// Handle ground movement and pipe spawning/removal
		useEffect(() => {
			if (!gameStarted) return;

			const prevX = prevXRef.current;

			const updatePipes = (x: number) => {
				const x1 = Math.floor(x / PIPE_DISTANCE) * PIPE_DISTANCE + width;
				const x2 = Math.floor(prevX / PIPE_DISTANCE) * PIPE_DISTANCE + width;

				if (x1 !== x2) {
					spawnPipe(x1); // Spawn pipe at the new position
					setPipes((prevPipes) =>
						prevPipes.filter((pipe) => pipe.x >= x - 100)
					);
					prevXRef.current = x; // Update prevXRef to the current groundX
				}
			};

			updatePipes(groundX);
		}, [groundX, gameStarted, spawnPipe]);

		// Check collision with pipes
		useEffect(() => {
			if (!gameStarted) return;

			let prevX = prevXRef.current;

			const checkCollision = (x: number) => {
				if (gameOver) return;

				const lastPipeIndex = pipes.findIndex((pipe) => pipe.x > prevX + PIPE_DISTANCE / 2);
				const pipeIndex = pipes.findIndex((pipe) => pipe.x > x + PIPE_DISTANCE / 2);

				if (pipeIndex !== lastPipeIndex) {
					// audios.point.play();
					setScore((prevScore) => prevScore + 1);
				}

				const collisionPipeIndex = pipes.findIndex((pipe) => pipe.x > x + 50);
				if (collisionPipeIndex === -1) return;

				const pipe = pipes[collisionPipeIndex];
				const top = new Rectangle(pipe.x - 45, pipe.y - 100 - 1000, 90, 1000);
				const bottom = new Rectangle(pipe.x - 45, pipe.y + 100, 90, 1000);

				if (
					top.contains(x + spaceshipX, spaceshipY) ||
					bottom.contains(x + spaceshipX, spaceshipY)
				) {
					// audios.hit.play();
					// setTimeout(() => audios.die.play(), 100);
					setGameOver(true);
					setGameStarted(false);
					onGameEnd();
				}
			};

			checkCollision(groundX);
		}, [
			groundX,
			pipes,
			spaceshipX,
			spaceshipY,
			gameOver,
			gameStarted,
			onGameEnd,
		]);

		// Handle game over and spaceship movement
		useEffect(() => {
			if (!gameOver) return;

			let prevX = groundX;

			const handleGameOver = (x: number) => {
				setSpaceshipX((prevSpaceshipX) => prevSpaceshipX + prevX - x);
				if (spaceshipX < -100) {
					onGameEnd();
				}
				prevX = x;
			};

			handleGameOver(groundX);
		}, [groundX, gameOver, spaceshipX, onGameEnd]);

		// Imperative methods for starting and ending the game
		useImperativeHandle(ref, () => ({
			start() {
				console.log("The game has started!");
				setGameStarted(true); // Start the game
				setGameOver(false); // Reset game over state
				setScore(0); // Reset score
				setSpaceshipX(SPACESHIP_POSITION.x); // Reset spaceship position
				setSpaceshipY(SPACESHIP_POSITION.y); // Reset spaceship position
			},
			end() {
				console.log("The game has ended!");
				setGameStarted(false); // Stop the game
				setGameOver(true); // Reset game over state
				setPipes([]);
			},
		}));

		return (
			<>
				{
					<>
						<Pipes pipes={pipes} offset={groundX} />
						{gameStarted && (
							<Score width={width} height={height} score={score} />
						)}
						<Spaceship
							x={spaceshipX}
							y={spaceshipY}
							disabled={!gameStarted}
							onDie={onGameEnd}
							onUpdateY={(newY) => setSpaceshipY(newY)}
							width={width}
							height={height}
						/>
					</>
				}
			</>
		);
	}
);

export default Gameplay;
