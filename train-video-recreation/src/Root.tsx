import React from 'react';
import {Composition} from 'remotion';
import {TrainFilm, type TrainFilmProps} from './TrainFilm';

const defaultProps: TrainFilmProps = {
  showCaptions: false,
  brand: 'YOUR LOGO',
};

export const Root: React.FC = () => {
  return (
    <Composition
      id="TrainTiresRecreation"
      component={TrainFilm}
      durationInFrames={2190}
      fps={30}
      width={720}
      height={1280}
      defaultProps={defaultProps}
    />
  );
};
