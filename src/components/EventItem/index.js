import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImgClassName = isActive ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="event-list-item">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImgClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
