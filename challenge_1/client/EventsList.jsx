import React from 'react';
import Event from './Event.jsx';

const EventsList = (props) => {
  console.log(`these are props inside EventList:${props.events}`);
  let eventNodes = props.events.map((event, index) => {
    return <Event key={index} event={event}/>
  });
  return (
    <div className="eventsList">
      <ul>{eventNodes}</ul>
    </div>
    
  )
}

export default EventsList;
