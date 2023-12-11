export const SavedEvents = ({ saved, handleRemove }) => {
  return (
    <div className="savedEvents">
      <h2>Saved Events</h2>
      {saved.map((event) => (
        <div key={event.title}>
          <p>{event.title}</p>
          <button onClick={() => handleRemove(event._id)}>x</button>
        </div>
      ))}
    </div>
  );
};
