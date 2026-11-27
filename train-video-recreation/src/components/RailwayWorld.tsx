import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import type {Shot} from '../data/timeline';
import {TrainModel} from './TrainModel';
import {Worker} from './Worker';

interface RailwayWorldProps {
  shot: Shot;
}

const Track: React.FC<{frame: number; dark: boolean}> = ({frame, dark}) => {
  const sleeperShift = (frame / 30 * 2.4) % 1.7;
  return (
    <group>
      {Array.from({length: 19}, (_, i) => (
        <mesh key={i} position={[-15 + i * 1.7 - sleeperShift, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.24, 3.2, 0.18]} />
          <meshStandardMaterial color={dark ? '#414955' : '#66574a'} roughness={0.95} />
        </mesh>
      ))}
      {[-1.02, 1.02].map((z) => (
        <mesh key={z} position={[0, 0.16, z]}>
          <boxGeometry args={[42, 0.19, 0.2]} />
          <meshStandardMaterial color="#747f89" metalness={0.78} roughness={0.32} />
        </mesh>
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.14, 0]}>
        <planeGeometry args={[90, 90]} />
        <meshStandardMaterial color={dark ? '#101a28' : '#6f7272'} roughness={1} />
      </mesh>
    </group>
  );
};

const WheelHero: React.FC<{frame: number; sparks: boolean}> = ({frame, sparks}) => {
  const spin = frame * 0.035;
  return (
    <group position={[0, 1.02, 3.3]} rotation={[0, 0, -0.08 + Math.sin(frame / 28) * 0.025]} scale={1.22}>
      <mesh rotation={[Math.PI / 2, spin, 0]}>
        <cylinderGeometry args={[1.04, 1.04, 0.34, 40]} />
        <meshStandardMaterial color="#52616c" metalness={0.84} roughness={0.29} />
      </mesh>
      <mesh position={[0, 0, 0.2]}>
        <torusGeometry args={[0.91, 0.17, 14, 52]} />
        <meshStandardMaterial color="#e47a32" roughness={0.78} />
      </mesh>
      <mesh position={[0, 0, 0.24]}>
        <cylinderGeometry args={[0.28, 0.28, 0.13, 24]} />
        <meshStandardMaterial color="#c5cbd0" metalness={0.88} roughness={0.23} />
      </mesh>
      {Array.from({length: sparks ? 12 : 0}, (_, i) => {
        const angle = i * 0.62 + frame * 0.09;
        return (
          <mesh key={i} position={[Math.cos(angle) * 1.22, Math.sin(angle) * 1.12, 0.33]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.34, 0.035, 0.035]} />
            <meshStandardMaterial color="#ffe28b" emissive="#ff9c2f" emissiveIntensity={2.3} />
          </mesh>
        );
      })}
    </group>
  );
};

const InteriorSet: React.FC = () => (
  <group position={[0, 0, 2.1]}>
    <mesh position={[0, 2.65, 0]}>
      <boxGeometry args={[6.8, 0.18, 2.8]} />
      <meshStandardMaterial color="#c58c54" roughness={0.82} />
    </mesh>
    {[-2.4, -0.8, 0.8, 2.4].map((x) => (
      <group key={x} position={[x, 0, 0]}>
        <mesh position={[0, 0.63, 0]}>
          <boxGeometry args={[0.95, 1.1, 0.62]} />
          <meshStandardMaterial color="#7d3c36" roughness={0.84} />
        </mesh>
        <mesh position={[0, 1.18, 0.1]}>
          <boxGeometry args={[1.02, 0.18, 0.68]} />
          <meshStandardMaterial color="#d7a36a" roughness={0.72} />
        </mesh>
      </group>
    ))}
    {[-2.2, 0, 2.2].map((x) => (
      <mesh key={x} position={[x, 2.52, -0.2]}>
        <sphereGeometry args={[0.17, 14, 10]} />
        <meshStandardMaterial color="#ffe3a6" emissive="#ffbd61" emissiveIntensity={1.2} />
      </mesh>
    ))}
  </group>
);

const Rocks: React.FC<{frame: number}> = ({frame}) => (
  <group position={[0, 0, 2.7]}>
    {Array.from({length: 9}, (_, i) => {
      const x = -3.5 + i * 0.85;
      const y = 0.2 + (i % 3) * 0.2;
      const z = (i % 2) * 0.35;
      const settle = i % 2 === 0 ? Math.sin(frame / 19 + i) * 0.025 : 0;
      return (
        <mesh key={i} position={[x, y + settle, z]} rotation={[0.2 * i, 0.3 * i, 0.12 * i]}>
          <dodecahedronGeometry args={[0.48 + (i % 3) * 0.14, 0]} />
          <meshStandardMaterial color={i % 2 ? '#5e6164' : '#77716a'} roughness={1} />
        </mesh>
      );
    })}
  </group>
);

export const RailwayWorld: React.FC<RailwayWorldProps> = ({shot}) => {
  const frame = useCurrentFrame();
  const isNight = !['intro', 'dialogue', 'fired', 'installation', 'interior', 'inspection', 'sleeping', 'friction-analogy'].includes(shot.kind);
  const travelling = ['tracking', 'parallel-trains', 'final', 'station'].includes(shot.kind);
  const wheelFocus = ['installation', 'sparks', 'wheel-row'].includes(shot.kind);
  const showTyres = ['intro', 'installation', 'tracking', 'sparks', 'wheel-row', 'final'].includes(shot.kind);
  const trainX = travelling ? interpolate(Math.sin(frame / 22), [-1, 1], [-0.75, 0.75]) : 0;
  const workerExpression = shot.kind === 'fired' || shot.kind === 'passengers' ? 'worried' : shot.kind === 'sparks' ? 'surprised' : 'neutral';

  return (
    <>
      <color attach="background" args={[isNight ? '#071526' : '#202b36']} />
      <fog attach="fog" args={[isNight ? '#071526' : '#202b36', 20, 48]} />
      <ambientLight intensity={isNight ? 0.72 : 1.05} />
      <directionalLight position={[5, 9, 8]} intensity={2.1} color="#fff0d8" />
      <pointLight position={[-4, 4, 4]} intensity={isNight ? 28 : 10} color="#ffb85b" distance={18} />
      <pointLight position={[4, 3, -5]} intensity={isNight ? 24 : 9} color="#6aa5ff" distance={18} />

      <Track frame={frame} dark={isNight} />

      {shot.kind === 'door' && (
        <mesh position={[0, 1.9, 6]}>
          <boxGeometry args={[8, 5.5, 0.3]} />
          <meshStandardMaterial color="#080b10" roughness={1} />
        </mesh>
      )}

      <group position={[trainX, 0, shot.kind === 'final' ? -2.5 : -0.7]} scale={shot.kind === 'final' ? 0.84 : 1}>
        <TrainModel
          frame={frame}
          travelling={travelling}
          tyres={showTyres}
          headlights={isNight}
        />
      </group>

      {shot.kind === 'parallel-trains' && (
        <group position={[0, -1.1, -7.4]} scale={0.76}>
          <TrainModel frame={frame + 18} travelling tyres headlights />
        </group>
      )}

      {shot.kind === 'station' && (
        <group position={[0, 0, -3]}>
          <mesh position={[0, 3.9, -1.6]}>
            <boxGeometry args={[8, 0.32, 1.2]} />
            <meshStandardMaterial color="#334554" />
          </mesh>
          <mesh position={[-3.5, 2.1, -1.5]}>
            <boxGeometry args={[0.34, 4.2, 0.45]} />
            <meshStandardMaterial color="#667887" />
          </mesh>
          <mesh position={[3.5, 2.1, -1.5]}>
            <boxGeometry args={[0.34, 4.2, 0.45]} />
            <meshStandardMaterial color="#667887" />
          </mesh>
        </group>
      )}

      {shot.kind === 'interior' || shot.kind === 'inspection' ? <InteriorSet /> : null}

      {['intro', 'dialogue', 'group', 'fired', 'inspection', 'passengers', 'friction-analogy'].includes(shot.kind) && (
        <>
          <Worker
            position={shot.kind === 'fired' ? [-1.2, 0.08, 3.35] : [-2.15, 0.08, 2.55]}
            uniform="#e98a31"
            cap="#263443"
            expression={workerExpression}
            raiseArm={shot.kind === 'intro' || shot.kind === 'fired' ? 'right' : 'none'}
            scale={shot.kind === 'friction-analogy' ? 0.82 : 0.95}
          />
          <Worker
            position={shot.kind === 'fired' ? [1.15, 0.08, 3.25] : [2.05, 0.08, 2.45]}
            uniform="#285b48"
            cap="#1d3c35"
            expression={shot.kind === 'fired' ? 'stern' : 'neutral'}
            raiseArm={shot.kind === 'fired' ? 'left' : 'none'}
            scale={0.93}
          />
        </>
      )}

      {shot.kind === 'sleeping' && (
        <>
          <Worker position={[-1.05, 0.05, 2.7]} uniform="#9e5578" cap="#54324b" expression="sleepy" scale={0.82} />
          <mesh position={[0, 1.23, 3.08]}>
            <sphereGeometry args={[0.24, 18, 14]} />
            <meshStandardMaterial color="#f0c6a9" roughness={0.85} />
          </mesh>
          <mesh position={[0.12, 0.91, 3.08]}>
            <sphereGeometry args={[0.32, 18, 14]} />
            <meshStandardMaterial color="#e9e0d2" roughness={0.94} />
          </mesh>
        </>
      )}

      {shot.kind === 'wheel-row' && (
        <group position={[0, 0.2, 3.2]} scale={0.92}>
          {[-2.4, -0.8, 0.8, 2.4].map((x) => (
            <group key={x} position={[x, 0, 0]}>
              <mesh rotation={[Math.PI / 2, frame * 0.035, 0]}>
                <cylinderGeometry args={[0.68, 0.68, 0.26, 32]} />
                <meshStandardMaterial color="#56636c" metalness={0.82} roughness={0.3} />
              </mesh>
              <mesh position={[0, 0, 0.16]}>
                <torusGeometry args={[0.58, 0.13, 12, 36]} />
                <meshStandardMaterial color="#e47a32" roughness={0.8} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {wheelFocus && shot.kind !== 'wheel-row' && <WheelHero frame={frame} sparks={shot.kind === 'sparks'} />}

      {shot.kind === 'hazard' && <Rocks frame={frame} />}
      {shot.kind === 'final' && <Rocks frame={frame} />}

      {shot.kind === 'horn' && (
        <group position={[-1.5, 3.9, 0.4]}>
          {Array.from({length: 7}, (_, i) => {
            const age = (frame / 10 + i * 0.38) % 2;
            const size = 0.18 + age * 0.2;
            return (
              <mesh key={i} position={[Math.sin(i * 1.8) * 0.38, age * 0.64, i * 0.035]} scale={size}>
                <sphereGeometry args={[1, 14, 12]} />
                <meshStandardMaterial color="#f3f4f5" transparent opacity={Math.max(0.08, 0.58 - age * 0.23)} roughness={1} />
              </mesh>
            );
          })}
        </group>
      )}

      {shot.kind === 'tracking' && (
        <group position={[-2.8, 0.12, 2.2]}>
          {Array.from({length: 6}, (_, i) => (
            <mesh key={i} position={[i * 0.42 + (frame / 14) % 0.42, 0.15 + (i % 2) * 0.1, 0]}>
              <sphereGeometry args={[0.13 + (i % 2) * 0.04, 10, 8]} />
              <meshStandardMaterial color="#9a8a76" transparent opacity={0.3} />
            </mesh>
          ))}
        </group>
      )}

      {shot.kind === 'fired' && (
        <group position={[0, 1.68, 4.15]}>
          <mesh>
            <boxGeometry args={[2.1, 1.25, 0.08]} />
            <meshStandardMaterial color="#f7f0df" roughness={0.95} />
          </mesh>
          <mesh position={[0, 0, 0.055]}>
            <boxGeometry args={[1.35, 0.11, 0.025]} />
            <meshStandardMaterial color="#9d2930" />
          </mesh>
        </group>
      )}

      {shot.kind === 'friction-analogy' && (
        <group position={[Math.sin(frame / 5) * 0.65, 0.12, 2.9]}>
          <mesh position={[0, 0.14, 0]}>
            <boxGeometry args={[0.95, 0.2, 0.4]} />
            <meshStandardMaterial color="#f0eee6" roughness={0.9} />
          </mesh>
          <mesh position={[0.34, 0.22, 0]}>
            <boxGeometry args={[0.24, 0.12, 0.42]} />
            <meshStandardMaterial color="#d94d51" roughness={0.9} />
          </mesh>
        </group>
      )}
    </>
  );
};
