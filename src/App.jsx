

import './App.css'
import ComplimentButton from './components/ComplimentButton'
import Emojis from './components/Emojis'
import { MoodProvider } from './context/MoodContext'

const App = () => {
  
  return (

  <div>
    <MoodProvider>
     <Emojis />
     <ComplimentButton />
    </MoodProvider>
  </div>
      
  )
}

export default App
