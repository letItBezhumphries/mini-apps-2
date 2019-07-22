import React from 'react';
import { Card } from 'semantic-ui-react';

const Event = (props) => {
  const { date, description, category2 } = props.event
  return (
    <div className="entry_container">
      <div className="date_field">{props.event.date}</div>
      <p className="description_field">{props.event.description}</p>
      <h2 className="category_two">{props.event.category2}</h2>
      {/* <Card>
        <Card.Content header={date} />
        <Card.Content description={description} />
        <Card.Content extra>
          {category2}
        </Card.Content>
      </Card> */}
    </div>
  )
}

export default Event;
