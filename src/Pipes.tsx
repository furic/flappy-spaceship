import Pipe from "./Pipe";

interface PipeProps {
	pipes: { x: number; y: number }[];
	offset: number;
}

const Pipes = ({ pipes, offset }: PipeProps) => {
	return (
		<>
			{pipes.map((pipe) => (
				<Pipe key={pipe.x} x={pipe.x - offset} y={pipe.y} />
			))}
		</>
	);
};

export default Pipes;
