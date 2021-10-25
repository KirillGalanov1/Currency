import * as React from 'react'

import Widget from './components/Widget'
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = React.useState(false)

  const handleClick = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div>
      <Widget setShowModal={handleClick} />
      {showModal && <Modal closeModal={handleClick}/>}
    </div>
  );
}

export default App;
