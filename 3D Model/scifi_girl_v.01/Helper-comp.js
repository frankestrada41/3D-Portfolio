/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: patrix (https://sketchfab.com/patrix)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/scifi-girl-v01-96340701c2ed4d37851c7d9109eee9c0
title: Scifi Girl v.01
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/helper-comp.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.1}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.cloth} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.eyelash} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.eyes_inner} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.eyes_outer} />
        <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
        <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
        <mesh geometry={nodes.Object_9.geometry} material={nodes.Object_9.material} />
        <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
        <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
        <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.ground} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.hair_inner} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.hair_outer} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.light} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.ring} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.tear} />
      </group>
    </group>
  )
}

useGLTF.preload('/helper-comp.glb')
