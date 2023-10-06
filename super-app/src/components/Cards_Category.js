// import React from 'react'
// import actionImage from '../images/action.png'
// import dramaImage from '../images/drama.png'
// import fantasyImage from '../images/fantasy.png'
// import fictionImage from '../images/fiction.png'
// import horrorImage from '../images/horror.png'
// import musicImage from '../images/music.png'
// import registerImage from '../images/register.png'
// import romanceImage from '../images/romance.png'
// import thrillerImage from '../images/thriller.png'
// import westernImage from '../images/western.png'

// const Cards_Category = () => {
//   return (
//     <div>
//         <h3></h3>
//         <img src={actionImage} alt='cardImage'/>
//     </div>
//   )
// }

// export default Cards_Category


import React from 'react';
import '../styles/Cards_Category.css';
function Cards_Category({ image, heading, onClick, isSelected, backgroundColor }) {
  const cardStyle = {
    border: isSelected ? '5px solid #11B800' : '0px transparent',
    backgroundColor: backgroundColor,
  };

  return (
    <div className="card" onClick={onClick} style={cardStyle}>
      <h3>{heading}</h3>
      <img src={image} alt={heading} />
    </div>
  );
}

export default Cards_Category;
