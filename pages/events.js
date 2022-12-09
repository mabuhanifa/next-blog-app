import React, { useState } from "react";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3004/events?category=sports");
    const data = await res.json();
    setEvents(data);
  };
  return (
    <div>
      <button onClick={fetchEvents}>Sports</button>
      <div>
        {events &&
          events.map((event) => (
            <div key={event.id}>
              <h2> {event.title}</h2>
              <h2> {event.category}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3004/events");
  const data = await res.json();
  return {
    props: {
        eventList: data,
    },
  };
}
