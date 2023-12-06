// import React from "react";
// import CardList from "../components/CardList";
// import { robots } from '../robots';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
//  import './App.css';

 
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response=>{
//                 return response.json();
//             })
//             .then(users=>{
//                 this.setState({robots: users}) // Define 'users' here
//             });

//     }

//     onSearchChange = (event) => {
//         this.setState({searchfield: event.target.value})
//     }
    
//     render() {
//         const filteredRobots = this.state.robots.filter(robot=>{
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || robot.email.toLowerCase().includes(this.state.searchfield) 
//         })

//         if(this.state.robot === 0){
//             return <h1>Loading</h1>
//         } else{
//             return (
//                 <div>
//                     <div className="font f4">
//                         <h1>Robots</h1>
//                     </div>
//                     <SearchBox searchChange={this.onSearchChange} />
//                     <Scroll>
//                     <CardList robots = {filteredRobots} />
//                     </Scroll>
//                 </div>
//             );

//             } 
//         }
// }

// export default App;

import React from "react";
import CardList from "../components/CardList";
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
 import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=1500')
            .then(response => response.json())
            .then(data => {
                const users = data.results.map(user => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    email: user.email,
                    image: user.picture.large
                }));
                this.setState({ robots: users });
            })
            .catch(error => console.log("Error fetching data:", error));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const { searchfield, robots } = this.state;

        const filteredRobots = robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(searchfield.toLowerCase()) ||
                robot.email.toLowerCase().includes(searchfield.toLowerCase())
            );
        });

        return (
            <div>
                <div className="font f4">
                    <h1>Users</h1>
                </div>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
