import { Environment, EnvironmentMap, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Car } from './Car'
import { Engine } from './Engine'
import React, { Suspense, useState } from 'react'


export default function Experience() {
    const [activeEngine, setActiveEngine] = useState(false)
    console.log(setActiveEngine)

    return (
        <Suspense>
            <div style={
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            
            }>
                <Canvas camera={{position : [0, 20, 60]}} >
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <ambientLight intensity={1} />
                    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/old_depot_4k.hdr' background={true} ground={{ height: 35, radius: 100, scale: 200 }}/>
                    <directionalLight position={[0, 0, 100]} intensity={1} />
                    <spotLight position={[0, 0, 100]} intensity={1} />
                    <Car position={[-8, 0, -10]} scale={20} rotation-y={-Math.PI / 4} setActiveEngine={setActiveEngine}  />
                </Canvas>
                {activeEngine &&
                    <div style={
                        {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        }
                    }>
                        <button 
                            style={
                                {
                                    position: 'relative',
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: 50,
                                    marginBottom: '90vh',
                                    marginLeft: '20px',
                                }
                            }
                            onClick={() => setActiveEngine(false)}>X</button>
                        <Canvas camera={{position : [0, 0, -12]}}>
                            <ambientLight intensity={1} />
                            <OrbitControls enableZoom={true} enablePan={true} />
                            <Engine position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                }
            </div>

        </Suspense>
    )
}