import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Img
} from 'remotion';
import rio from "./assets/images/rio.png";
import hotel from "./assets/images/hotel.png";
import cheapFlights from "./assets/images/cheapFlights.png";
import { Title } from './components/title'
import { Image } from './components/image'


export const MainComposition: React.FC<{
	
}> = ({}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[600, -50]
	);
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
				<Sequence from={0}>
					<Img src={rio} />
					<AbsoluteFill style={{opacity: opacity}}>
						<Title titleText='You have to see it closely' titleColor='#fff'/>
						<Image src={hotel} style={{position: 'absolute', bottom: 250, right: 200, transform: `rotate(5deg) translateY(${logoTranslation}px)`}} width={500} height={300}/>
						<Image src={cheapFlights} style={{position: 'absolute', bottom: 250, left: 200, transform: `rotate(-5deg) translateY(${logoTranslation}px)`}} width={500} height={300}/>
					</AbsoluteFill>
				</Sequence>
		</AbsoluteFill>
	);
};
