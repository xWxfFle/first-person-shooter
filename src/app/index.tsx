import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  KeyboardControls,
  OrbitControls,
  Text,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense, useState } from 'react'
import { Rifle } from '@/shared/model-assets/rifle'
import { Loader } from '@/shared/ui/loader'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
]

export const App = () => {
  const [paused, setPaused] = useState(true)
  return (
    <div className="h-[100dvh]">
      <Canvas
        className="h-full"
        onClick={() => setPaused(false)}
        camera={{ fov: 60 }}
      >
        <Environment files="puresky.hdr" background />
        <Suspense fallback={<Loader />}>
          {paused && (
            <Text
              color="#2f2f2f"
              scale={0.3}
              position={[0, 1.5, 0]}
              rotation={[0, Math.PI, 0]}
            >
              Click me to start
            </Text>
          )}
          <Physics timeStep="vary" paused={paused}>
            <KeyboardControls map={keyboardMap}>
              <Rifle />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableDamping={false}
                position={[0, 0, 0]}
              />
            </KeyboardControls>
            <RigidBody type="fixed" colliders="trimesh">
              {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="green" />
              </mesh> */}
            </RigidBody>
          </Physics>
        </Suspense>
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
      </Canvas>
    </div>
  )
}
