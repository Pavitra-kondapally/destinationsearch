// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl, id} = destinationDetails
  return (
    <li className="destination-card-container">
      <img src={imgUrl} className="image-card" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
