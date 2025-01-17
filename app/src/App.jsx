import VideoPlayer from './components/VideoPlayer';
import MyVideo from './assets/video-1/toggle-class.mp4';
import VideoThumb from './assets/video-1/thumb.png';
import './App.css';

function App() {
	return (
		<>
			<div className='video-wrapper'>
				<VideoPlayer src={MyVideo} thumbnail={VideoThumb} />
			</div>
		</>
	);
}

export default App;
