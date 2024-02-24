import { Environment, EnvironmentMap, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Car } from './Car'


export default function Experience() {

    return <>
    <Canvas camera={{position : [0, 20, 60]}} >
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2 - 0.25}/>
        <ambientLight intensity={1} />
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/old_depot_4k.hdr' background={true} ground={{ height: 35, radius: 100, scale: 200 }}/>
        <directionalLight position={[0, 0, 100]} intensity={1} />
        <spotLight position={[0, 0, 100]} intensity={1} />
        <Car position={[-8, 0, -10]} scale={20} rotation-y={-Math.PI / 4} />
    </Canvas>

    
       
    </>
}