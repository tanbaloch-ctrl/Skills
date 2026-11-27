# Train Tires Video Recreation

A Remotion + Three.js starter project for reconstructing the supplied **Why They Put Tires on a Train** reference.

## Verified source format

- 720 × 1280 (9:16 vertical)
- 30 FPS
- 2,187 decoded video frames (frame indices 0–2186)
- 72.900 seconds nominal video duration
- H.264 video, AAC stereo audio (44.1 kHz)
- Video stream first PTS is 1 frame (33.333 ms) after container/audio start

## Frame-indexed reference audit

- [Frame-accurate visual breakdown](./docs/FRAME_ACCURATE_BREAKDOWN.md)
- [Visual beat edit decision list (CSV)](./docs/FRAME_EDL.csv) — 38 annotated camera/action phases
- [Per-source-frame index (CSV)](./docs/FRAME_INDEX.csv) — all 2,187 decoded frames mapped to a beat ID

The timeline distinguishes hard visual changes from continuous camera passage through windows/doors, foreground wipes and prop actions. Frame count and time conversion are exact. Beat annotations are frame-indexed editorial labels, not a claim that every beat is a hard cut or that every individual frame has a unique semantic description.

## Setup

Requires Node.js 20 or newer and npm.

```bash
npm install
npm run start
```

Open Remotion Studio and select **TrainTiresRecreation**.

## Render an MP4

```bash
npm run render
```

Output: `out/train-tires-recreation.mp4`

Quick preview: `npm run render:preview`

## Current reconstruction status

The project provides procedural train geometry, wheels/tyre rings, worker placeholders, railway environment, editable frame-indexed shot timeline, a caption overlay (disabled by default) and a manual GitHub Actions preview render workflow.

This remains a reconstruction scaffold, not a pixel-identical source-project recovery. The original meshes, rigs, textures, camera transforms, editable captions/transcript, narration stems and sound-effect stems are not embedded in the MP4. Exact per-frame acting curves, facial phonemes, camera paths, prop transforms and audio labels require further source-asset or manual review.
