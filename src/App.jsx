import { useRef } from 'react';
import MyInput from './components/MyInput';

const App = () => {
  const myInputRef = useRef(null);
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={() => myInputRef.current.focusInput()}>Focus</button>
      <button onClick={() => myInputRef.current.clearInput()}>Clear</button>
    </div>
  )
}

export default App;