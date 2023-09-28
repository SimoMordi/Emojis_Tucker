import { useContext } from 'react'
import { MoodContext } from '../../context/MoodContext'


const emojis = {
   happy: '😃',
   neutral: '😐',
   sad: '😞'
}

const Emojis = () => {
    const {currentMood} = useContext(MoodContext)


  return (
    <div>
      {emojis[currentMood]}
    </div>
  )
}

export default Emojis
