import profilePic from "@/assets/sea-otters.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Cleooo</h2>
      <p className="card-text">Just a random day in June</p>
    </div>
  );
}

export default Card;
