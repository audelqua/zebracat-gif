import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Img
} from 'remotion';


export const Image: React.FC<{
	src: string;
  style: object;
  width: number;
  height: number;
}> = ({src, style, width, height}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	return (
    <div style={{...style}}>
      <Img src={src} style={{width: width, height: height}}/>
    </div>
    
	);
};
