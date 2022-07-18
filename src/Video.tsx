import {Composition} from 'remotion';
import {MainComposition} from './mainComposition';

// Each <Composition> is an entry in the sidebar!

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
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			
		</>
	);
};
