import { extend, useAsset } from "@pixi/react";
import { type Size, Text } from "pixi.js";

extend({ Text });

const Score = ({ width, height, score }: Size & { score: number }) => {
	useAsset("assets/flappy-bird.ttf");

	return (
		<pixiText
			text={`Score: ${score}`}
			x={width / 2}
			y={height * 0.05}
			anchor={0.5}
			style={{
				fontFamily: "Flappy Bird",
				fill: "#FFFFFF",
				fontSize: 30,
				align: "center",
			}}
		/>
	);
};

export default Score;
