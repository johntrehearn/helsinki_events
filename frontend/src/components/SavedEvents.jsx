import "../styles/savedEvents.css";

export const SavedEvents = ({ saved, handleRemove }) => {
  return (
    <div className="savedEvents">
      <h2>SAVED EVENTS</h2>
      {saved.map((event) => (
        <div key={event.title}>
          <div className="flex">
            <p>{event.title}</p>
            <button onClick={() => handleRemove(event._id)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
};
