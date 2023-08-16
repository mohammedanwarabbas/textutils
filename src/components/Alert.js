import React from 'react'

export default function Alert(props) {
  return (
    //if props.alert is null then it will return false and interpreter won't check any more code.if it is not null then we display alert
    props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.alertMessage}</strong>!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
