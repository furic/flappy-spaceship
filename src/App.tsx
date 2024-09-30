import "./App.css";

import { useRef, useState } from "react";
import { Application } from "@pixi/react";

import Background from "./Background";
import Gameplay from "./Gameplay";
import UI from "./UI";

const App = () => {
	const [showUI, setShowUI] = useState(true);
	const gameplayRef = useRef<{ start: () => void; end: () => void } | null>(
		null
	);

	const startGame = () => {
		if (gameplayRef.current) {
			gameplayRef.current.start();
		}
		// Hide the UI when the game starts
		setShowUI(false);
	};

	const endGame = () => {
		if (gameplayRef.current) {
			gameplayRef.current.end();
		}
		setShowUI(true); // Show UI when the game ends
	};

	return (
		<Application width={1200} height={675}>
			<Background width={1200} height={675} />
			<UI width={1200} height={675} showUI={showUI} onStartClick={startGame} />
			<Gameplay
				width={1200}
				height={675}
				ref={gameplayRef}
				onGameEnd={endGame}
			/>
		</Application>
	);
};

export default App;
