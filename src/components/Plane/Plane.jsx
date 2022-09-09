import { DoubleSide } from "three";
import * as THREE from 'three'
import img from './img.jpeg'
import { useLoader } from 'react-three-fiber'

export default function Plane() {
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <planeBufferGeometry attach="geometry" />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshBasicMaterial attach="material" map={texture} side={DoubleSide} />
    </mesh>
  )
}