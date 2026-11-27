# Frame-Accurate Breakdown — Why They Put Tires on a Train

## 1. Verified source metadata

| Property | Verified value |
|---|---|
| Resolution | 720 × 1280 (9:16 vertical) |
| Frame rate | 30/1 FPS |
| Decoded frames | 2,187 (indices 0–2,186) |
| Video duration | 72.900 seconds |
| Video codec | H.264 / AVC, progressive, yuv420p, BT.709 |
| Audio | AAC LC, stereo, 44.1 kHz, 72.990431 seconds |
| First video frame PTS | 0.033333 seconds |

**Time formula:** relative time from the first decoded video frame = `frame_index / 30`. The matching video stream PTS = `(frame_index + 1) / 30`, because the first video frame begins one frame after container time zero. Audio begins at 0.000 seconds.

## 2. Deliverables

- `FRAME_EDL.csv`: 38 visual beats with inclusive in-frame, exclusive out-frame, timecodes, movement notes and transition type.
- `FRAME_INDEX.csv`: one row for every decoded source frame (2,187 rows), mapped to a beat ID and position within that beat.
- `../src/data/timeline.ts`: same frame-indexed beat map used by the Remotion composition.
- `AUDIO_ENERGY_100MS.csv`: local audit export containing 100 ms RMS and peak envelope. This file is also attached separately with the report; audio-energy peaks are not labelled sound effects.

## 3. Frame-indexed visual breakdown

Frame convention: **IN inclusive / OUT exclusive**. The EDL rows describe visual beats and camera phases; they are not all hard cuts.

| Beat | Source frames | Relative time | What happens |
|---|---:|---:|---|
| B01 | 0–237 | 0.000–7.933s | Daylight exterior; orange worker beside red/cream passenger carriage and exposed wheel; green-uniform official joins. Small head, face and hand acting. |
| B02 | 238–243 | 7.933–8.133s | Dark ribbed foreground door/post crosses the lens, wiping to a night undercarriage scene. |
| B03 | 244–316 | 8.133–10.567s | Night steel carriage and rotating spoked wheels; upset passenger looks/leans from a window. Low lateral tracking. |
| B04 | 317–323 | 10.567–10.800s | Camera passes through a carriage window/door opening into the warm passenger compartment. |
| B05 | 324–384 | 10.800–12.833s | Night platform with passengers sprawled on tiled floor, luggage and a pink-clad standing character. Wide pan/reframe. |
| B06 | 385–449 | 12.833–15.000s | Orange worker and green official beside carriage. Push-in to a two-shot; face, eye and restrained hand changes. |
| B07 | 450–494 | 15.000–16.500s | Mother holds sleeping baby in a carriage window; lateral pan/reframe with official partially in foreground. |
| B08 | 495–613 | 16.500–20.467s | Orange worker, green official and dark-blue character form a group; alternating head/eye/mouth reactions. |
| B09 | 614–626 | 20.467–20.900s | Character reaction close-up; cap flicks upward in a short exaggerated action. |
| B10 | 627–633 | 20.900–21.133s | Green riveted panel occludes the lens and reveals the wheel-repair shot. |
| B11 | 634–704 | 21.133–23.500s | Worker crouches by wheel; orange ring/tyre and tools are positioned. Low wheel-height track. |
| B12 | 705–740 | 23.500–24.700s | Pullback/orbit reveals tram nose, twin headlights, station lights, clock, benches and NIGHT LINE sign. |
| B13 | 741–747 | 24.700–24.933s | Foreground post wipe reveals silver/blue passenger carriage. |
| B14 | 748–802 | 24.933–26.767s | Low side track along silver/blue carriage and spoked wheel; woman leans from upper window. |
| B15 | 803–808 | 26.767–26.967s | Camera approaches rounded tram front and its window/door opening. |
| B16 | 809–851 | 26.967–28.400s | Warm orange front compartment; seated female passenger and riders behind; slow push-in. |
| B17 | 852–878 | 28.400–29.300s | Reverse dolly retreats through front opening, bringing the tram frame around the passenger view. |
| B18 | 879–988 | 29.300–32.967s | Sleeping riders along warm coach aisle; green official tiptoes, bends and checks eyelids. |
| B19 | 989–1004 | 32.967–33.500s | Camera exits the coach and reveals the exterior driver area. |
| B20 | 1005–1064 | 33.500–35.500s | Blue-uniform driver and brass roof horn; white steam puffs expand and dissipate. |
| B21 | 1065–1116 | 35.500–37.233s | Camera re-enters coach and returns to mother holding sleeping baby. |
| B22 | 1117–1126 | 37.233–37.567s | Short pullback through front window to tram nose and headlamp. |
| B23 | 1127–1183 | 37.567–39.467s | Low undercarriage side track; rotating wheels, sleeper parallax, window passenger and light dust/smoke. |
| B24 | 1184–1194 | 39.467–39.833s | Camera returns through tram front toward the workers. |
| B25 | 1195–1312 | 39.833–43.767s | Interior worker/official dialogue; official presents YOU’RE FIRED paper; worried worker reaction. Paper enters around source frame 1235. |
| B26 | 1313–1362 | 43.767–45.433s | Reverse dolly from letter/worker interior out to rounded tram front. |
| B27 | 1363–1407 | 45.433–46.933s | Camera passes back through coach; passengers react around the workers and letter. |
| B28 | 1408–1469 | 46.933–49.000s | Camera travels down corridor between parallel trains; blue driver leans from cab; pillow begins to appear. |
| B29 | 1470–1609 | 49.000–53.667s | White pillow is raised/waved near driver; camera tracks/pans along red carriage flank and wheel row. |
| B30 | 1610–1709 | 53.667–57.000s | High crane-like pullback reveals parallel tracks and rocky landslide/debris zone in dark landscape. |
| B31 | 1710–1772 | 57.000–59.100s | Front-facing red tram approaches; passengers visible in windows and headlights grow. |
| B32 | 1773–1829 | 59.100–61.000s | Warm passenger interior; orange worker foreground, sleepers behind; push-in and small reactions. |
| B33 | 1830–1864 | 61.000–62.167s | Very low wheel/rail contact; apparent skid/lock and orange-white sparks. |
| B34 | 1865–1910 | 62.167–63.700s | Floor-level friction analogy: white sneakers and striped socks slide/plant on polished red floor. |
| B35 | 1911–1982 | 63.700–66.100s | Low side track along red carriage and repeated wheels with thick black rubber-like outer rings. |
| B36 | 1983–2050 | 66.100–68.367s | Red/cream tram moves beside rocky trackside; foreground rocks and front-window character. |
| B37 | 2051–2086 | 68.367–69.567s | Camera passes through tram front/window to warm interior and mother with sleeping baby. |
| B38 | 2087–2186 | 69.567–72.900s | Final night exterior by rocky/muddy track; character slides/falls into mud; white shoe/foot remains foreground as ending holds. |

## 4. Animation system visible in the source

### Character performance
- Predominantly limited-pose 3D character acting rather than constant full-body motion.
- Readable actions: head turns, eye direction, mouth changes, eyebrow/face reactions, small arm gestures, leaning/reaching, tiptoeing, checking eyelids, waving and falling/sliding.
- Principal roles: orange-uniform railway worker, green-uniform official, blue-uniform driver, window passengers, mother/baby and sleeping passengers.
- Props that need independent animation: cap, letter, pillow, tools, bucket, baby wrap, luggage and wheel-ring.

### Mechanical action
- Train body translation against the railway environment.
- Rotating metal spoked wheels and separate orange/black rubber-like outer ring.
- Track sleeper parallax during lateral camera tracking.
- Ring/tyre installation, wheel-row showcase, wheel/rail contact, sparks, dust and steam.
- Treat wheels, axles, rubber ring, carriage body and track as separate 3D parts.

### Camera system
- Low lateral tracking along carriage sides and wheelsets.
- Forward/reverse moves through windows and door openings.
- Foreground occlusion wipes where a door/post/panel crosses the whole image.
- Slow push-ins for dialogue and passenger reactions; pullbacks reveal the tram front/station.
- High elevated pullback for the parallel tracks/landslide reveal.
- Very low wheel/rail close-up for the spark/skid beat.
- Distinguish object movement from camera movement. A window frame sliding past the lens does not necessarily mean a cut.

### Lighting and materials
- Daylight opening with warm neutral platform light.
- Night exterior uses deep navy/blue ambient tones against warm yellow/orange station and carriage practicals.
- Warm orange/brown interiors with soft ceiling lamps.
- Painted red/cream tram surfaces, dark undercarriage, metallic wheel/rail highlights, rubber-like tyre ring and pale steam/smoke.
- High contrast orange-white sparks at the wheel/rail contact.

### Text and graphic elements
- Station sign reads **NIGHT LINE**.
- **YOU’RE FIRED** is a physical letter/prop in the worker/official sequence.
- Small lower-screen caption fragments appear at some times. The full transcript and exact word timing are not confirmed; captions in the recreation remain disabled by default. Do not infer a full transcript from isolated OCR readings.

## 5. Audio audit

- The source has a stereo AAC-LC audio stream at 44.1 kHz.
- A 100 ms RMS/peak loudness envelope was extracted to support future synchronization. It is an energy measurement only.
- High 100 ms peak windows occur around 0.8, 2.3, 3.5, 11.1, 20.5, 23.8, 33.8, 40.2, 49.7, 58.9 and 71.9 seconds.
- These peaks are **not** labelled as narration, horn, music or impact without listening/transcription.
- Exact word-level narration, subtitle timing and discrete sound-effect spotting remain unverified.

## 6. Accuracy statement

The following are exact: decoded frame count, FPS, resolution, frame numbering, frame-to-time conversion and the per-frame CSV mapping. The 38 beat boundaries are explicit frame-indexed annotations checked against frame-difference/histogram signals, sequential decoding, 6 FPS contact sheets and focused boundary neighbourhoods. Some boundaries define an action/camera phase rather than a hard edit.

This is not a 100% pixel-identical recreation specification. The rendered MP4 does not contain original 3D meshes, rigs, textures, animation curves, camera transforms, editor timeline or editable audio stems. Exact per-frame joint transforms, facial phonemes, lens settings, camera paths, velocity curves, particle trajectories, complete transcript and audio identities cannot be recovered perfectly from the MP4 alone. Those require source project/assets or a manual frame-by-frame and audio-listening pass.
