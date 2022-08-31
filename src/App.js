import './App.css';
import CardList from './component/Card-list';

function App() {
  return (
    <div className="App">
      <section className="cards">
        <h1 className="cards__header">Самые знаменитые коты в мире</h1>
        <div className="cards__list">
          <CardList/>
        </div>
      </section>
    </div>
  );
}

export default App;
