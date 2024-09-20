import{ Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
    const gltf = useGLTF('https://models.readyplayer.me/66e9288704eba267d2ae0f20.glb');

    return <primitive object={gltf.scene} />;
}

function Me() {
    return (
        <div style={{width: '100%', height: '100vh'}}>
            <Canvas camera={{position: [0, 1, 5], fov: 50}}>
                <ambientLight intensity={2}/>
                <directionalLight position={[10, 10, 5]} intensity={1}/>
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
                <OrbitControls enableZoom={false} minDistance={1} maxDistance={10}/>
            </Canvas>
        </div>
    );
}

export default Me;
