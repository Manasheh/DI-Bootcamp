import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimal';
import Exercise from './Exercise3';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  const myelement = <h1>I Love JSX</h1>
  const sum = 5 + 5
  
  return (
    <div className="App">
        <Exercise />      
        <p>
          Hello World!
        </p>
        {myelement}
        React is {sum} times better with JSX
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals = {user.favAnimals} />
    </div>
  );
}

export default App;
