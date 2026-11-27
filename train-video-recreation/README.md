# Train Tires Video Recreation

A Remotion + Three.js starter project for reconstructing the visual language of the supplied **Why They Put Tires on a Train** reference.

## Verified source format

- 720 × 1280 (9:16 vertical)
- 30 FPS
- 2,187 decoded video frames
- 72.900 seconds nominal video duration
- H.264 video, AAC stereo audio (44.1 kHz)
- Video stream's first PTS is 1 frame (33.333 ms) after the container/audio start

## Frame-accurate reference audit

The original MP4 was decoded sequentially. The full frame count, frame rate, timestamps, adjacent-frame visual deltas and focused transition neighborhoods were checked. The frame EDL is indexed from decoded video frame 0 and uses **inclusive start / exclusive end** frame ranges.

- `docs/FRAME_ACCURATE_BREAKDOWN.md` — visual sequence, camera moves, character actions, props, lighting, caption treatment, and transition notes
- `docs/FRAME_EDL.csv` — 38 detailed visual beats with exact source frame ranges
- `docs/FRAME_INDEX.csv` — one row for each of the 2,187 source frames, mapped to its visual beat

Many apparent transitions are camera moves through windows/doorways or foreground occlusion wipes, not hard cuts. The EDL explicitly labels those transition types.

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

## Current reconstruction status

This is an editable procedural reconstruction scaffold, not a pixel-identical copy. The reference video does not include its original source models, rig files, textures, camera project, caption transcript or editable audio stems. The current project provides original procedural geometry, train/wheel components, character placeholders, a frame-indexed shot timeline and rendering setup.

The frame map makes the scene timing repeatable. Matching every source pose, exact facial expression, prop location, camera transform, subtitle word timing and original audio mix remains a separate asset/refinement task. Captions are disabled by default because no verified word-level transcript is bundled.
