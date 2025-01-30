import { extend, useAsset } from '@pixi/react';
import { Sprite } from 'pixi.js';

extend({ Sprite });

interface PipeProps {
	x: number;
	y: number;
}

const Pipe = ({ x, y }: PipeProps) => {
	const texture = useAsset('assets/rock-pile.png');

	// const {
	// 	assets: [texture],
	// 	isSuccess,
	// } = useAssets(["assets/rock-pile.png"]);

	return (
		<>
			{/* Top part of the pipe */}
			<sprite
				texture={texture}
				anchor={{ x: 0.5, y: 0 }}
				x={x}
				y={y - 60}
				scale={{ x: 1, y: -1.5 }} // flip vertically for the top pipe
			/>
			{/* Bottom part of the pipe */}
			<sprite
				texture={texture}
				anchor={{ x: 0.5, y: 0 }}
				x={x}
				y={y + 60}
				scale={{ x: -1, y: 1.5 }} // flip horizontally for the bottom pipe
			/>
		</>
	);
};

export default Pipe;
