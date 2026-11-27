# Train Tires Video Recreation

A Remotion + Three.js starter project for recreating the visual grammar of the supplied **Why They Put Tires on a Train** reference.

## Target format

- 720 × 1280 (9:16 vertical)
- 30 FPS
- 2,190 frames / 73 seconds
- Stylized 3D cartoon mechanical explainer
- Timeline based on the uploaded reference analysis

## What is included

- Remotion composition and render scripts
- A 3D railway world with a stylized red-and-gold train
- Procedural wheels and optional orange rubber rings
- Simple reusable worker/passenger character rigs
- Shot-state changes based on the analysed timeline
- Optional word-by-word caption overlay
- Track, night lighting, station, horn-smoke, dust and spark accents

## Setup

Requires Node.js 20 or newer and npm.

```bash
npm install
npm run start
```

Open the Remotion Studio preview and select **TrainTiresRecreation**.

## Render an MP4

```bash
npm run render
```

Output:

```
out/train-tires-recreation.mp4
```

For a quick low-resolution test:

```bash
npm run render:preview
```

## Important reference limitations

This is a **reconstruction scaffold**, not a pixel-identical copy. The original video does not provide its source 3D models, character rigs, textures, project files or editable caption transcript. This project recreates the observed visual language with original procedural geometry and editable shot timing.

The timeline in `src/data/timeline.ts` is approximate and based on the supplied frame-sampled analysis. Exact caption words and audio timing must be replaced with a verified transcript / source audio edit list. Captions are off by default for that reason.

## Main files

- `src/data/timeline.ts` — shot ranges and editable caption cues
- `src/components/TrainModel.tsx` — train body, wheels and rubber rings
- `src/components/Worker.tsx` — reusable cartoon character rig
- `src/components/RailwayWorld.tsx` — 3D environment and shot staging
- `src/components/CaptionOverlay.tsx` — word-by-word caption style
- `src/TrainFilm.tsx` — composition and overlay layout

## Current build stage

The first pass focuses on a working, editable animated prototype: consistent train geometry, frame-driven mechanical motion, shot variation, and caption styling. Fine matching of all source poses, detailed character likeness, exact prop positions, narration, sound design and final colour grading remain refinement work.
