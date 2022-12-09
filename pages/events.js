import React from "react";

export default function EventList({ event }) {
  return (
    <div>
      <div>
        {event &&
          event.map((event) => (
            <div key={event.id}>
              <h2> {event.id}</h2>
              <h2> {event.id}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3004/events");
  return {
    props: {
      events: await res.json(),
    },
  };
}
