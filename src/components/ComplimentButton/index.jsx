import { useContext } from 'react'
import { MoodContext } from '../../context/MoodContext'




const ComplimentButton = () => {
    const {compliments, setCompliments, setCurrentMood} = useContext(MoodContext)

    const handleClick = () => {
        const newCompliments = compliments + 1
        setCompliments(newCompliments)

        if (newCompliments < 3) setCurrentMood('sad')
        else if (newCompliments < 5) setCurrentMood('neutral')
        else setCurrentMood('happy')

    }



  return (
    <div>
      <button onClick={handleClick}>Give Compliment</button>
    </div>
  )
}

export default ComplimentButton
