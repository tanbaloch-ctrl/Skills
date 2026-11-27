import React from 'react';

export interface WorkerProps {
  position?: [number, number, number];
  uniform: string;
  cap?: string;
  scale?: number;
  expression?: 'neutral' | 'worried' | 'surprised' | 'sleepy' | 'stern';
  raiseArm?: 'left' | 'right' | 'both' | 'none';
}

export const Worker: React.FC<WorkerProps> = ({
  position = [0, 0, 0],
  uniform,
  cap = '#17202b',
  scale = 1,
  expression = 'neutral',
  raiseArm = 'none',
}) => {
  const eyebrowY = expression === 'surprised' ? 1.97 : 1.91;
  const eyeScale = expression === 'sleepy' ? [0.08, 0.035, 0.035] : [0.07, 0.085, 0.04];
  const mouthWidth = expression === 'surprised' ? 0.1 : 0.16;

  return (
    <group position={position} scale={scale}>
      {/* Body and uniform */}
      <mesh position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.3, 0.38, 0.92, 14]} />
        <meshStandardMaterial color={uniform} roughness={0.78} />
      </mesh>
      <mesh position={[0, 1.42, 0]}>
        <boxGeometry args={[0.62, 0.12, 0.38]} />
        <meshStandardMaterial color={cap} roughness={0.8} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.72, 0]}>
        <sphereGeometry args={[0.36, 24, 18]} />
        <meshStandardMaterial color="#e8b895" roughness={0.85} />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 2.02, 0]}>
        <cylinderGeometry args={[0.37, 0.34, 0.12, 20]} />
        <meshStandardMaterial color={cap} roughness={0.75} />
      </mesh>
      <mesh position={[0, 1.98, 0.18]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.48, 0.06, 0.24]} />
        <meshStandardMaterial color={cap} roughness={0.75} />
      </mesh>

      {/* Eyes, brows and mouth face the camera (+Z). */}
      <mesh position={[-0.13, 1.77, 0.315]} scale={eyeScale as [number, number, number]}>
        <sphereGeometry args={[1, 12, 10]} />
        <meshStandardMaterial color="#17202b" />
      </mesh>
      <mesh position={[0.13, 1.77, 0.315]} scale={eyeScale as [number, number, number]}>
        <sphereGeometry args={[1, 12, 10]} />
        <meshStandardMaterial color="#17202b" />
      </mesh>
      <mesh position={[-0.13, eyebrowY, 0.31]} rotation={[0, 0, expression === 'worried' ? 0.22 : 0]}>
        <boxGeometry args={[0.16, 0.035, 0.035]} />
        <meshStandardMaterial color="#38251e" />
      </mesh>
      <mesh position={[0.13, eyebrowY, 0.31]} rotation={[0, 0, expression === 'worried' ? -0.22 : 0]}>
        <boxGeometry args={[0.16, 0.035, 0.035]} />
        <meshStandardMaterial color="#38251e" />
      </mesh>
      <mesh position={[0, 1.59, 0.34]}>
        <sphereGeometry args={[mouthWidth * 0.48, 12, 10]} />
        <meshStandardMaterial color="#633b35" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.43, raiseArm === 'left' || raiseArm === 'both' ? 1.27 : 1.0, 0]} rotation={[0, 0, raiseArm === 'left' || raiseArm === 'both' ? 0.85 : -0.28]}>
        <cylinderGeometry args={[0.075, 0.075, 0.76, 10]} />
        <meshStandardMaterial color={uniform} roughness={0.8} />
      </mesh>
      <mesh position={[0.43, raiseArm === 'right' || raiseArm === 'both' ? 1.27 : 1.0, 0]} rotation={[0, 0, raiseArm === 'right' || raiseArm === 'both' ? -0.85 : 0.28]}>
        <cylinderGeometry args={[0.075, 0.075, 0.76, 10]} />
        <meshStandardMaterial color={uniform} roughness={0.8} />
      </mesh>
      <mesh position={[-0.43, raiseArm === 'left' || raiseArm === 'both' ? 1.63 : 0.62, 0.015]}>
        <sphereGeometry args={[0.1, 12, 10]} />
        <meshStandardMaterial color="#e8b895" />
      </mesh>
      <mesh position={[0.43, raiseArm === 'right' || raiseArm === 'both' ? 1.63 : 0.62, 0.015]}>
        <sphereGeometry args={[0.1, 12, 10]} />
        <meshStandardMaterial color="#e8b895" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.17, 0.26, 0]} rotation={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.095, 0.11, 0.55, 10]} />
        <meshStandardMaterial color="#263447" />
      </mesh>
      <mesh position={[0.17, 0.26, 0]} rotation={[0, 0, -0.04]}>
        <cylinderGeometry args={[0.095, 0.11, 0.55, 10]} />
        <meshStandardMaterial color="#263447" />
      </mesh>
      <mesh position={[-0.17, -0.015, 0.08]}>
        <boxGeometry args={[0.23, 0.12, 0.38]} />
        <meshStandardMaterial color="#121923" />
      </mesh>
      <mesh position={[0.17, -0.015, 0.08]}>
        <boxGeometry args={[0.23, 0.12, 0.38]} />
        <meshStandardMaterial color="#121923" />
      </mesh>
    </group>
  );
};
