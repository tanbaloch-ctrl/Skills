export type ShotKind =
  | 'intro'
  | 'dialogue'
  | 'night'
  | 'passengers'
  | 'sleeping'
  | 'group'
  | 'door'
  | 'installation'
  | 'station'
  | 'tracking'
  | 'interior'
  | 'inspection'
  | 'horn'
  | 'fired'
  | 'parallel-trains'
  | 'hazard'
  | 'sparks'
  | 'friction-analogy'
  | 'wheel-row'
  | 'final';

export interface Shot {
  id: string;
  start: number;
  end: number;
  kind: ShotKind;
  description: string;
}

export const SHOTS: Shot[] = [
  {id: 'opening-worker-wheel', start: 0, end: 3.3, kind: 'intro', description: 'Orange worker beside red train and exposed wheel'},
  {id: 'staff-arrives', start: 3.3, end: 7.7, kind: 'dialogue', description: 'Green-uniform staff joins the worker'},
  {id: 'night-passengers', start: 7.7, end: 12.7, kind: 'night', description: 'Night exterior and distressed passengers'},
  {id: 'wheel-dialogue', start: 12.7, end: 15.5, kind: 'dialogue', description: 'Worker and staff talk beside the carriage'},
  {id: 'mother-and-baby-1', start: 15.5, end: 16.7, kind: 'sleeping', description: 'Sleeping passenger holding a baby'},
  {id: 'railway-group', start: 16.7, end: 20.5, kind: 'group', description: 'Railway characters exchange reactions'},
  {id: 'dark-panel', start: 20.5, end: 21.2, kind: 'door', description: 'Brief dark door or panel insert'},
  {id: 'rubber-ring-install', start: 21.2, end: 23.5, kind: 'installation', description: 'Orange rubber ring aligned with wheel'},
  {id: 'night-line-station', start: 23.5, end: 24.5, kind: 'station', description: 'Train passes the NIGHT LINE station'},
  {id: 'carriage-wheel-pass', start: 24.5, end: 27, kind: 'tracking', description: 'Low side view, passenger window and wheel'},
  {id: 'passenger-interior', start: 27, end: 30, kind: 'interior', description: 'Warm carriage interior and seated riders'},
  {id: 'staff-inspection', start: 30, end: 33, kind: 'inspection', description: 'Green-uniform staff checks sleeping passengers'},
  {id: 'driver-horn', start: 33, end: 35.5, kind: 'horn', description: 'Driver, brass horn and white steam puff'},
  {id: 'mother-and-baby-2', start: 35.5, end: 37.3, kind: 'sleeping', description: 'Return to sleeping passenger and baby'},
  {id: 'moving-wheel-row', start: 37.3, end: 39.7, kind: 'tracking', description: 'Low moving carriage shot with dust puffs'},
  {id: 'fired-paper-reveal', start: 39.7, end: 43.8, kind: 'fired', description: 'Worker receives YOU’RE FIRED paper reveal'},
  {id: 'wheel-ring-confirm', start: 43.8, end: 45.5, kind: 'installation', description: 'Extreme wheel and orange rubber ring close-up'},
  {id: 'train-and-reaction', start: 45.5, end: 47, kind: 'dialogue', description: 'Train view and character reactions'},
  {id: 'parallel-trains', start: 47, end: 54, kind: 'parallel-trains', description: 'Two trains face each other on parallel tracks'},
  {id: 'track-hazard', start: 54, end: 57, kind: 'hazard', description: 'Elevated railway view and rocky track obstruction'},
  {id: 'passenger-stakes', start: 57, end: 60.5, kind: 'passengers', description: 'Passenger reaction followed by facing trains'},
  {id: 'wheel-contact-sparks', start: 60.5, end: 62.5, kind: 'sparks', description: 'Wheel and rail contact with bright sparks'},
  {id: 'sock-friction-analogy', start: 62.5, end: 63.8, kind: 'friction-analogy', description: 'Character slides in socks as a grip analogy'},
  {id: 'rubber-wheel-showcase', start: 63.8, end: 66.2, kind: 'wheel-row', description: 'Lateral showcase of rubber-ringed wheels'},
  {id: 'train-by-rocks', start: 66.2, end: 68.3, kind: 'tracking', description: 'Train travels beside rocky trackside'},
  {id: 'mother-and-baby-3', start: 68.3, end: 70, kind: 'sleeping', description: 'Warm family carriage interior'},
  {id: 'final-wide-railway', start: 70, end: 73, kind: 'final', description: 'Elevated final night railway view'},
];

export const getShotAtFrame = (frame: number, fps: number): Shot => {
  const seconds = frame / fps;
  return SHOTS.find((shot) => seconds >= shot.start && seconds < shot.end) ?? SHOTS[SHOTS.length - 1];
};

// Demonstration cues only. Replace with a verified transcript and word-level timings.
// Captions are disabled by default in Root.tsx.
export const CAPTION_CUES = [
  {start: 0, end: 0.38, word: 'WHY'},
  {start: 0.38, end: 0.75, word: 'THEY'},
  {start: 0.75, end: 1.15, word: 'PUT'},
  {start: 1.15, end: 1.65, word: 'TIRES'},
  {start: 1.65, end: 1.95, word: 'ON'},
  {start: 1.95, end: 2.15, word: 'A'},
  {start: 2.15, end: 2.8, word: 'TRAIN'},
] as const;
