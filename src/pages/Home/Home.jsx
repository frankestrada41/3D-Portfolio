import { Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import Helper from '../../components/Helper/Helper';
import Plane from '../../components/Plane/Plane'
import DialogueBox from '../../components/DialogueBox/DialogueBox'
import ChatInput from '../../components/ChatInput/ChatInput'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, -4] }} style={{ backgroundColor: 'black', width: "100%", height: "100vh", position: 'absolute' }}>
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[0, 15, -10]} castShadow />
        <Suspense fallback={null}>
          <Stars />
          <Helper />
          <Plane />
        </Suspense>
      </Canvas>
      <DialogueBox props={'Hola'} />
      <ChatInput />
      <Button />
    </>
  )
}

export default Home