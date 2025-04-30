import './styles/global.scss';
import React, { useState } from 'react';
import Greeting from './components/greeting/greeting'
import Marquee from './components/marquee/marquee'
import About from './components/about/about'
import Mission from './components/mission/mission'
import Principies from './components/principies/principies'
import Join from './components/join/join'
import Communities from './components/communities/communities'
import Teams from './components/teams/teams'
import Gallery from './components/gallery/gallery'
import Modal from './components/modal/modal'
import ModalVacancy from './components/modalVacancy/modalVacancy'

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="box">
      <Greeting setModalActive={setModalActive}/>
      <Marquee />
      <About />
      <Mission />
      <Principies />
      <Join />
      <Communities />
      <Teams />
      <Gallery />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalVacancy />
      </Modal>
    </div>
  );
}



export default App;