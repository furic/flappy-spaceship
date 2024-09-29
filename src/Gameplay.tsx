import { useImperativeHandle, forwardRef } from "react";

interface GameplayProps {
	onGameEnd: () => void;
}

const Gameplay = forwardRef(({ onGameEnd }: GameplayProps, ref) => {
	// useImperativeHandle allows the parent component to call methods in the child
	useImperativeHandle(ref, () => ({
		start() {
			console.log("The game has started!");
			// You can add game logic here, such as initializing game state, etc.
		},
		end() {
			console.log("The game has ended!");
			// Trigger the onGameEnd function passed from the parent
			onGameEnd();
		},
	}));

	return <></>;
});

export default Gameplay;
