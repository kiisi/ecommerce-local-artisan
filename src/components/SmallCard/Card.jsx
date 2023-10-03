/* eslint-disable react/prop-types */
import './card.scss'

const Card = ({item}) => {
  return (
    <div className={`card ${item.wide ? 'wide' : 'norm'}`}>
        <img src={item.image} alt="" />
        <p className="name">
            {item.name}
        </p>
    </div>
  )
}

export default Card