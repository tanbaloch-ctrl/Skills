import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {getShotAtFrame} from './data/timeline';
import {RailwayWorld} from './components/RailwayWorld';
import {CaptionOverlay} from './components/CaptionOverlay';

export interface TrainFilmProps {
  showCaptions: boolean;
  brand: string;
}

export const TrainFilm: React.FC<TrainFilmProps> = ({showCaptions, brand}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const shot = getShotAtFrame(frame, fps);
  const shotProgress = (frame / fps - shot.start) / Math.max(0.001, shot.end - shot.start);
  const cameraBreath = interpolate(shotProgress, [0, 0.5, 1], [1.025, 1, 1.035], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#071526', overflow: 'hidden'}}>
      <ThreeCanvas
        width={width}
        height={height}
        camera={{position: [0, 3.5, 18], fov: 36, near: 0.1, far: 100}}
        dpr={1}
        shadows
        style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}
      >
        <group scale={cameraBreath}>
          <RailwayWorld shot={shot} />
        </group>
      </ThreeCanvas>

      {/* Small persistent brand safe-area mark, replace with the channel logo asset. */}
      <div
        style={{
          position: 'absolute',
          top: 32,
          right: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: '#f6f7f8',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: 1.5,
          textShadow: '0 2px 6px rgba(0,0,0,0.7)',
        }}
      >
        <span style={{width: 12, height: 12, borderRadius: 99, background: '#74c84c', boxShadow: '0 0 12px #74c84c'}} />
        {brand}
      </div>

      {shot.kind === 'fired' && frame / fps > 41 && frame / fps < 43.2 && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '38%',
            textAlign: 'center',
            color: '#a9272e',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 900,
            fontSize: 42,
            letterSpacing: 1,
            textShadow: '0 2px 2px rgba(0,0,0,0.35)',
          }}
        >
          YOU’RE FIRED
        </div>
      )}

      <CaptionOverlay enabled={showCaptions} />
    </AbsoluteFill>
  );
};
