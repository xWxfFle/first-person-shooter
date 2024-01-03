import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const App = () => {
  return (
    <div className="h-[100dvh]">
      <Canvas className="h-full">
        <Environment preset="city" background />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
