# Train Video Recreation — Production Status

**Status: Draft v2 rendered locally.**

## Rendered draft

- Duration: 72.900 seconds
- Video: 720 × 1280, vertical 9:16, H.264
- Frame rate: 30 FPS
- Frames: 2,187
- Audio: AAC stereo, using the user-supplied reference audio as the draft sync track

The complete rendered MP4 and portable renderer/asset ZIP are delivered in the associated ChatGPT conversation. The MP4 is not checked into this repository because it is a large render artifact.

## What is in this first draft

- 38 frame-indexed editorial beats mapped to source frame ranges
- Procedural red/cream passenger train, station, rails, wheel sets and environment
- Generated 3D-style cutout characters: worker, official, driver, mother/baby and sleepy passengers
- Generated 3D wheel-repair key art used for the repair section
- Basic animated wheel spokes, train movement, camera breathing/pans, horn smoke, wheel sparks and selected on-screen prop text
- Original source audio used as a temporary sync track

## Honest fidelity notes

This is a **first procedural 2.5D/3D-asset animatic**, not a pixel-identical 3D recreation. Several shots still use vector/procedural stand-ins. The original source did not include 3D models, skeleton rigs, materials, animation curves, camera transforms, editable caption transcript or separate audio stems. Those elements still need dedicated asset modelling, animation refinement and a detailed manual audio/caption pass.

## Canonical source analysis

- [Frame-accurate visual breakdown](./docs/FRAME_ACCURATE_BREAKDOWN.md)
- [Frame EDL](./docs/FRAME_EDL.csv)
- [All-frame index](./docs/FRAME_INDEX.csv)
- [Render/production README](./README.md)
