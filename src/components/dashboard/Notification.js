import React from 'react';
import moment from 'moment'

const Notification = (props) => {
  const {notifications} = props;

  return (
    <div className = "container section">
      <div className = "card z-depth-0">
        <span className = "card-content">
          <span className = "card-title center">
            Notifications
          </span>
          <ul className = "notifications">
            {notifications && notifications.map(item => {
              return (
                <li key = {item.id}>
                  <span className= "blue-text">
                    {item.user} { }
                  </span>
                  <span>
                    {item.content}
                  </span>
                  <div className = "grey-text note-date">
                    {moment(item.time.toDate()).fromNow()}</div> 
                </li>
              )
            })}
            {/* <li className = "center"> Notif 1</li>
            <li className = "center"> Notif 2</li>
            <li className = "center"> Notif 3</li> */}
          </ul>
        </span>
      </div>
    </div>
  )
} 

export default Notification