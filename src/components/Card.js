


// import React, { useState, useEffect } from "react";

// const Card = ({ id }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/")
//       .then((response) => response.json())
//       .then((data) => {
//         setUserData(data.results[0]);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, [id]);

//   return (
//     <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-1">
//       {userData ? (
//         <>
//           <img alt="photo" src={userData.picture.large} />
//           <div className="">
//             <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
//             <p>{userData.email}</p>
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Card;



// import React from "react";

// const Card = ({ name, email, id }) => {
//   const imageUrl = `https://robohash.org/${name}${email}?size=200x200`;

//   return (
//     <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-1">
//       <img alt="photo" src={imageUrl} />
//       <div className="">
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;





//  import React from "react";


// const Card = ({name, email, id}) => {
//     return (
//         <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-1">
//             <img alt="photo" src={`https://robohash.org/${id}?200x200`} />
//             {/* <img alt="photo" src="https://robohash.org/dinosaur?" /> */}
//             <div className="">
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
//     }
// export default Card;

 // Card.js
import React from "react";

const Card = ({ name, email, image }) => {
    return (
        <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-1">
            <img alt="robot" src={image} />
            <div className="">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
