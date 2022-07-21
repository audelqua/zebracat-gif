import {spring} from 'remotion';
import {
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion'


interface ComponentProps {
	titleText: string;
	titleColor: string;
}

export const Title: React.FC<ComponentProps> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

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
	)

	return (
      <span 
				style={{
					...titleStyle, 
					transform: `translateY(${logoTranslation}px)`, 
					color: titleColor
				}}
			>
				{titleText}
			</span>
	)
}

const titleStyle: React.CSSProperties = {
  fontFamily: 'SF Pro Text, Helvetica, Arial, sans-serif',
	fontSize: 80,
  fontWeight: 'bold',
	textAlign: 'center',
	position: 'fixed',
	top: 140,
	width: '100%',
  color: '#fff'
}
