import { extend, useAssets } from "@pixi/react";
import { Sprite, Text } from "pixi.js";

import { Size } from "./types";

extend({ Sprite, Text });

interface UIProps {
	onStartClick: () => void;
}

const UI = ({ width, height, onStartClick }: Size & UIProps) => {
	const {
		assets: [buttonTexture],
		isSuccess,
	} = useAssets(["assets/button.png"]);

	return (
		isSuccess && (
			<>
				<sprite
					texture={buttonTexture}
					x={width / 2}
					y={height * 0.75}
					width={300}
					height={80}
					anchor={0.5}
					interactive={true}
					cursor="pointer"
					onPointerDown={onStartClick}
				/>
				<pixiText
					text="Start"
					x={width / 2}
					y={height * 0.75}
					anchor={0.5}
					style={{ fill: "#FFFFFF", fontSize: 50 }}
				/>
			</>
		)
	);
};

export default UI;
