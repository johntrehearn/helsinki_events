import "./eventModal.css";

function EventModal() {
  return (
    <div className="modal">
      <div className="close-button">
        <span className="material-symbols-outlined">close</span>
      </div>
      <div className="flex-container">
        <div className="img-wrap">
          <img src="https://source.unsplash.com/400x400/?party" alt="" />
        </div>

        <div className="highlights">
          <h2 className="event-title">The most interesting event ever</h2>
          <h3>Location:</h3>
          <p>Street 12 | Kallio | HELSINKI</p>
          <h3>Time:</h3>
          <p>Friday | Nov 24, 2023</p>
          <h3>Price:</h3>
          <p>FREE</p>
          <h3>Homepage:</h3>
          <p>
            <a href="#">link</a>
          </p>
        </div>
      </div>

      <div className="description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sunt, inventore nesciunt harum at animi nobis numquam! Nobis ab
          reprehenderit voluptatum, quis laborum vitae odit fugiat nulla ipsam.
          Rerum delectus iure architecto nesciunt eum dolore repellendus
          sapiente. Iste similique ut accusantium veritatis. Quae ipsam
          distinctio assumenda reiciendis obcaecati minus aliquid a. Vitae quasi
          cum, voluptates error ex est, quia magni saepe cumque possimus
          molestiae dignissimos atque, pariatur tempore iure? Nemo aliquid
          dignissimos consectetur voluptate assumenda totam impedit delectus
          ratione quis quam dolore commodi, modi, voluptatibus cum quos,
          accusamus accusantium iste quo quae? Non suscipit dolore beatae enim
          reprehenderit, minus alias? Molestias tempora, pariatur nisi eos
          voluptas aliquid eaque repellat aut cum repudiandae deleniti,
          laboriosam aperiam eligendi. Provident molestiae inventore quas?
        </p>
      </div>
    </div>
  );
}

export default EventModal;
