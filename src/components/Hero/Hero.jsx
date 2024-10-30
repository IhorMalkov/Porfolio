import styles from './Hero.module.scss';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Hero() {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.textContainer}>
                <p className={styles.heroText}>
                    Hi, I am Ihor Malkov <span className={styles.wave}>👋🏻</span>
                </p>
                <p className={styles.heroText}>
                    I'm a passionate Software Engineer with a focus on creating web applications
                </p>
            </div>
            <div className={styles.model}>
                <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Suspense fallback={null}>
                    </Suspense>
                    <OrbitControls enableZoom={false} minDistance={1} maxDistance={10} />
                </Canvas>
            </div>
        </section>
    );
}
