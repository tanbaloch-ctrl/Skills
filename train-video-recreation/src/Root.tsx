import React from 'react';
import {Composition} from 'remotion';
import {TrainFilm, type TrainFilmProps} from './TrainFilm';
import {TOTAL_FRAMES, SOURCE_FPS} from './data/timeline';

const defaultProps: TrainFilmProps = {
  showCaptions: false,
  brand: 'YOUR LOGO',
};

export const Root: React.FC = () => {
  return (
    <Composition
      id="TrainTiresRecreation"
      component={TrainFilm}
      durationInFrames={TOTAL_FRAMES}
      fps={SOURCE_FPS}
      width={720}
      height={1280}
      defaultProps={defaultProps}
    />
  );
};
