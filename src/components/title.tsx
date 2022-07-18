import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Img
} from 'remotion';

const titleStyle: React.CSSProperties = {
  fontFamily: 'SF Pro Text, Helvetica, Arial, sans-serif',
	fontSize: 80,
  fontWeight: 'bold',
	textAlign: 'center',
	position: 'fixed',
	top: 140,
	width: '100%',
  color: '#fff'
};

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	})

	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[-250, 0]
	);

	return (
      <span style={{...titleStyle, transform: `translateY(${logoTranslation}px)`, color: titleColor}}>{titleText}</span>
	);
};
