export const SavedEvents = () => {
  
function handleClick(){

    console.log("Button clicked - Saved")

  /*   fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));  */

}  
  
  
    return (
    
    <div className='savedEvents'>

        <h2>Saved Events</h2>
        <button onClick={ () => handleClick("localhost:5555/events")}>Saved Events</button>


    </div>
  )
}
