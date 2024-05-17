import Flip from '../flip/Flip'
import data from '../../data/data.json'
import './card.css'

export default function Card() {
  return (
    <div className="containers">
      {data.slice(0, 5).map((item, index) => (
        <div key={index} style={{ "--r": index * 5 }} className="glass">
          <Flip data={item} />
        </div>
      ))}
    </div>
  
  )
}
