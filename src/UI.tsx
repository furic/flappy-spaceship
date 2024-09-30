import { useEffect } from "react";
import { extend, useAsset } from "@pixi/react";
import { type Size, Text } from "pixi.js";

extend({ Text });

interface UIProps {
	showUI: boolean;
	onStartClick: () => void;
}

const UI = ({ width, height, showUI, onStartClick }: Size & UIProps) => {
	useAsset("assets/flappy-bird.ttf");

	// Add a keydown listener for the spacebar
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === " ") {
				onStartClick();
			}
		};

		if (showUI) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [showUI, onStartClick]);

	return (
		showUI && (
			<>
				<pixiText
					text={"Flippy\nSpaceship"}
					x={width / 2}
					y={height * 0.45}
					anchor={0.5}
					style={{
						fontFamily: "Flappy Bird",
						fill: "#FFFFFF",
						fontSize: 150,
						align: "center",
					}}
					interactive={true}
					cursor="pointer"
					onPointerDown={onStartClick}
				/>
				<pixiText
					text="Click or press spacebar to start"
					x={width / 2}
					y={height * 0.95}
					anchor={0.5}
					style={{
						fontFamily: "Flappy Bird",
						fill: "#FFFFFF",
						fontSize: 23,
						align: "center",
					}}
				/>
			</>
		)
	);
};

export default UI;
