import "./App.css";

import { Application, extend, useAssets } from "@pixi/react";
import { Container, Sprite, Text } from "pixi.js";
import { FancyButton } from "@pixi/ui";
import { Signal } from "typed-signals";

extend({
	Container,
	Sprite,
	Text,
	FancyButton,
});

const App = () => {
	const {
		assets: [buttonTexture, buttonHoverTexture, buttonPressedTexture],
		isSuccess,
	} = useAssets([
		"assets/button.png",
		"assets/button_hover.png",
		"assets/button_pressed.png",
	]);

	let mySignal = new Signal<() => void>();
	mySignal.connect(() => console.log("Button pressed!"));

	const buttonDefaultSprite = new Sprite({ texture: buttonTexture });
	const buttonHoverSprite = new Sprite({ texture: buttonHoverTexture });
	const buttonPressedSprite = new Sprite({ texture: buttonPressedTexture });
	const buttonText = new Text({
		text: "Start",
		style: { fill: "#FFFFFF", fontSize: 50 },
	});

	return (
		<Application width={1200} height={675}>
			{isSuccess && (
				<fancyButton
					defaultView={buttonDefaultSprite}
					hoverView={buttonHoverSprite}
					pressedView={buttonPressedSprite}
					textView={buttonText}
					x={600}
					y={337.5}
					width={200}
					height={80}
					anchorX={0.5}
					anchorY={0.5}
					// onPress={() => {console.log('Button pressed!');}}
					onPress={mySignal}
				/>
			)}
		</Application>
	);
};

export default App;
