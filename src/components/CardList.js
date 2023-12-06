
// import React from "react";
// import Card from './Card';

// const CardList = ({ robots }) => {
//   return (
//     <div>
//       {
//         robots.map((robot) => (
//             <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
//          ))
//       }
//     </div>
//   );
// };

// export default CardList;

// CardList.js
import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((robot) => (
                    <Card 
                        key={robot.id} 
                        name={robot.name} 
                        email={robot.email} 
                        image={robot.image} 
                    />
                ))
            }
        </div>
    );
};

export default CardList;


// ...........................................................................
// import React from "react";
// import Card from './Card';

// const CardList = ({robots}) =>{
//     const cardsArray = robots.map((user, i) => {
//         return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
//     });
//     return(
//         <div>
//            {cardsArray}
//         </div>
//     );
// }
// export default CardList;

// ...........................................................................
// import React from "react";
// import Card from './Card';

// const CardList = ({ robots }) => {
//   return (
//     <div>
//       {robots.map((user, i) => (
//         <Card key={user.id} id={user.id} name={user.name} email={user.email} />
//       ))}
//     </div>
//   );
// };

// export default CardList;
