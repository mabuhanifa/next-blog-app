import React from "react";

export default function EventList({ events }) {
  return (
    <div>
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
      events: data,
    },
  };
}
