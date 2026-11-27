import React from 'react';

export interface TrainModelProps {
  frame: number;
  position?: [number, number, number];
  scale?: number;
  travelling?: boolean;
  tyres?: boolean;
  headlights?: boolean;
}

const WHEEL_X = [-2.25, -0.82, 0.78, 2.2];

export const TrainModel: React.FC<TrainModelProps> = ({
  frame,
  position = [0, 0, 0],
  scale = 1,
  travelling = false,
  tyres = true,
  headlights = true,
}) => {
  const spin = travelling ? frame * 0.19 : Math.sin(frame / 24) * 0.035;
  const travel = travelling ? Math.sin(frame / 26) * 0.34 : 0;

  return (
    <group position={[position[0] + travel, position[1], position[2]]} scale={scale}>
      {/* Main red carriage body */}
      <mesh position={[0, 1.62, 0]}>
        <boxGeometry args={[6.4, 1.55, 1.95]} />
        <meshStandardMaterial color="#b9272e" roughness={0.5} metalness={0.12} />
      </mesh>
      <mesh position={[0, 2.42, 0]}>
        <boxGeometry args={[6.34, 0.12, 2.02]} />
        <meshStandardMaterial color="#d69b36" metalness={0.2} roughness={0.42} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <boxGeometry args={[6.15, 0.2, 2.12]} />
        <meshStandardMaterial color="#303944" metalness={0.55} roughness={0.45} />
      </mesh>
      <mesh position={[-1.9, 2.63, 0]}>
        <boxGeometry args={[2.12, 1.15, 1.86]} />
        <meshStandardMaterial color="#c83a34" roughness={0.48} />
      </mesh>
      <mesh position={[-1.9, 3.23, 0]}>
        <boxGeometry args={[2.2, 0.12, 1.96]} />
        <meshStandardMaterial color="#d69b36" metalness={0.2} />
      </mesh>

      {/* Front buffer and lamp */}
      <mesh position={[3.27, 1.44, 0]}>
        <boxGeometry args={[0.35, 0.74, 1.45]} />
        <meshStandardMaterial color="#972029" roughness={0.55} />
      </mesh>
      <mesh position={[3.48, 1.62, 0.76]}>
        <sphereGeometry args={[0.16, 16, 12]} />
        <meshStandardMaterial color={headlights ? '#fff0b8' : '#74664c'} emissive={headlights ? '#ffcc68' : '#000000'} emissiveIntensity={headlights ? 1.8 : 0} />
      </mesh>
      <mesh position={[3.48, 1.62, -0.76]}>
        <sphereGeometry args={[0.16, 16, 12]} />
        <meshStandardMaterial color={headlights ? '#fff0b8' : '#74664c'} emissive={headlights ? '#ffcc68' : '#000000'} emissiveIntensity={headlights ? 1.8 : 0} />
      </mesh>

      {/* Windows on the visible long side */}
      {[-2.35, -1.28, -0.2, 0.88, 1.95].map((x, i) => (
        <mesh key={x} position={[x, 1.94, 0.99]}>
          <boxGeometry args={[0.66, 0.58, 0.06]} />
          <meshStandardMaterial color={i === 1 ? '#ffe0a0' : '#24364b'} emissive={i === 1 ? '#f9b84e' : '#091626'} emissiveIntensity={i === 1 ? 0.65 : 0.12} roughness={0.28} />
        </mesh>
      ))}
      <mesh position={[0, 1.02, 1.01]}>
        <boxGeometry args={[6.12, 0.07, 0.035]} />
        <meshStandardMaterial color="#efba50" metalness={0.25} />
      </mesh>

      {/* Axles, metal wheels and orange rubber rings */}
      {WHEEL_X.map((x, index) => (
        <group key={x}>
          <mesh position={[x, 0.48, 1.03]} rotation={[Math.PI / 2, spin + index * 0.04, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.18, 28]} />
            <meshStandardMaterial color="#4e5a65" metalness={0.78} roughness={0.34} />
          </mesh>
          <mesh position={[x, 0.48, 1.14]}>
            <cylinderGeometry args={[0.19, 0.19, 0.06, 20]} />
            <meshStandardMaterial color="#b9c1c7" metalness={0.85} roughness={0.26} />
          </mesh>
          {tyres && (
            <mesh position={[x, 0.48, 1.145]}>
              <torusGeometry args={[0.49, 0.105, 10, 36]} />
              <meshStandardMaterial color="#e47a32" roughness={0.8} />
            </mesh>
          )}
          <mesh position={[x, 0.48, -1.03]} rotation={[Math.PI / 2, spin + index * 0.04, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.18, 28]} />
            <meshStandardMaterial color="#4e5a65" metalness={0.78} roughness={0.34} />
          </mesh>
          {tyres && (
            <mesh position={[x, 0.48, -1.14]} rotation={[0, Math.PI, 0]}>
              <torusGeometry args={[0.49, 0.105, 10, 36]} />
              <meshStandardMaterial color="#e47a32" roughness={0.8} />
            </mesh>
          )}
        </group>
      ))}

      {/* Brass horn above the cab */}
      <mesh position={[-1.75, 3.42, 0.18]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.13, 0.09, 0.72, 16]} />
        <meshStandardMaterial color="#c89a43" metalness={0.72} roughness={0.3} />
      </mesh>
      <mesh position={[-1.35, 3.42, 0.18]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.1, 0.24, 18]} />
        <meshStandardMaterial color="#dbb65f" metalness={0.74} roughness={0.28} />
      </mesh>

      {/* Front coupling */}
      <mesh position={[3.55, 0.76, 0]}>
        <boxGeometry args={[0.38, 0.14, 0.34]} />
        <meshStandardMaterial color="#59636d" metalness={0.75} />
      </mesh>
    </group>
  );
};
