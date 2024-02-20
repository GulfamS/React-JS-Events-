import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-img"
      />
      <p className="yet-registration-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful arm form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-img"
      />
      <h1 className="register-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }
  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
