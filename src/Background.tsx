import { useState } from "react";
import { extend, useTick } from "@pixi/react";
import { type Size, Graphics } from "pixi.js";

import Star from "./Star";

extend({ Graphics });

const STAR_RADIUS = 2;
const STAR_COUNT = 100;
const SPEED = 0.25;

const Background = ({ width, height }: Size) => {
	// Set initial positions for stars
	const [stars, setStars] = useState(
		[...Array(STAR_COUNT)].map(() => ({
			x: Math.random() * width,
			y: Math.random() * height,
		}))
	);

	// Update positions every frame
	useTick(() => {
		setStars((stars) =>
			stars.map((star) => {
				let newX = star.x - SPEED;

				// If the star moves out of the left side, reset it to the right
				if (newX < -STAR_RADIUS) {
					newX = width;
				}

				return { ...star, x: newX };
			})
		);
	});

	return (
		<>
			{stars.map((star, i) => (
				<Star key={i} x={star.x} y={star.y} />
			))}
		</>
	);
};

export default Background;
