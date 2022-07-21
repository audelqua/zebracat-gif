import {Composition} from 'remotion';
import {MainComposition} from './mainComposition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MainComponent"
				component={MainComposition}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
