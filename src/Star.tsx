import { extend } from "@pixi/react";
import { Graphics } from "pixi.js";

import { Point } from "./types";

extend({ Graphics });

const RADIUS = 2;

const Star = ({ x, y }: Point) => {
	return (
		<graphics
			draw={(graphics) => {
				graphics.clear();
				graphics.setFillStyle({ color: "white" });
				graphics.circle(x, y, RADIUS);
				graphics.fill();
			}}
		/>
	);
};

export default Star;
