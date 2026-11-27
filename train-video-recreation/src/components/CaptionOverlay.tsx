import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {CAPTION_CUES} from '../data/timeline';

interface CaptionOverlayProps {
  enabled: boolean;
}

export const CaptionOverlay: React.FC<CaptionOverlayProps> = ({enabled}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  if (!enabled) return null;

  const seconds = frame / fps;
  const cue = CAPTION_CUES.find((item) => seconds >= item.start && seconds < item.end);
  if (!cue) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 116,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 58,
          fontWeight: 900,
          letterSpacing: 1,
          lineHeight: 1,
          textAlign: 'center',
          textTransform: 'uppercase',
          WebkitTextStroke: '2px #101319',
          textShadow: '0 4px 1px #101319, 2px 0 #101319, -2px 0 #101319',
        }}
      >
        {cue.word}
      </span>
    </div>
  );
};
