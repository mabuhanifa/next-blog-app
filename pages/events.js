import { useRouter } from "next/router";
import React, { useState } from "react";

export default function EventList({ eventList }) {
  const { push } = useRouter();
  const [events, setEvents] = useState(eventList);
  const fetchEvents = async () => {
    const res = await fetch("http://localhost:3004/events?category=sports");
    const data = await res.json();
    setEvents(data);
    push("/events?category=sports", undefined, { shallow: true });
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

export async function getServerSideProps({ query: { category } }) {
  const queryString = category ? "category" : "";
  const res = await fetch(`http://localhost:3004/events?${queryString}`);
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
}
