function Profile() {
  const imageUrl = "./src/assets/pfp.jpg";

  function handleClicker(e) {
    e.target.style.display = "none";
  }

  return <img onClick={(e) => handleClicker(e)} src={imageUrl}></img>;
}

export default Profile;
