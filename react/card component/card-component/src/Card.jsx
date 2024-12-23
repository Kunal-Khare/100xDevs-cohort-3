import profilePic from './assets/pfp2.jpg'

function Card(){
    return(
        <div className="card">
            <img  className = "card-image" src= {profilePic} alt="profile picture" />

            <h2 className='card-title'> Kunal Khare </h2>
            <p className='card-para'> Code ninja by day, caffeine-fueled zombie by night. I turn coffee into code and bugs into features—because who needs sleep anyway? 💻☕️</p>

        </div>
    )
}

export default Card;
