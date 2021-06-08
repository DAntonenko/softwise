import './styles/App.scss';

import './styles/components/button.scss';

import './styles/pages/character-view.scss';

import helm from '../src/assets/icons/helm.png';
import fire from '../src/assets/icons/fire2.png';
import books from '../src/assets/icons/books.png';
import gears from '../src/assets/icons/gears.png';

function App() {
  return (
    <div className="App">
      <main className="character-view">
        <h1 className="visually-hidden">Экран персонажа</h1>
        <nav className="character-view__tabs">
          <ul className="character-view__tabs-list">
            <li className="character-view__tab" tabIndex="1">
              <div className="character-view__tab-content">
                <img className="character-view__tab-icon" src={helm} alt="шлем" />
                <span className="character-view__tab-name">info</span>
              </div>
              <div className="character-view__tab-overlay" />
            </li>
            <li className="character-view__tab" tabIndex="2">
              <div className="character-view__tab-content">
                <img className="character-view__tab-icon" src={fire} alt="огонь" />
                <span className="character-view__tab-name">skills</span>
              </div>
              <div className="character-view__tab-overlay" />
            </li>
            <li className="character-view__tab" tabIndex="3">
              <div className="character-view__tab-content">
                <img className="character-view__tab-icon" src={books} alt="книги" />
                <span className="character-view__tab-name">skins</span>
              </div>
              <div className="character-view__tab-overlay" />
            </li>
            <li className="character-view__tab" tabIndex="4">
              <div className="character-view__tab-content">
                <img className="character-view__tab-icon" src={gears} alt="шестерни" />
                <span className="character-view__tab-name">upgrade</span>
              </div>
              <div className="character-view__tab-overlay" />
            </li>
          </ul>
        </nav>

        <section className="character-view__manage-block">
          <section className="character-view__lower-buttons-block">
            <button className="button button--secondary" type="button">снять снаряжение</button>
            <button className="button button--primary" type="button">уровень выше</button>
            <button className="button button--secondary" type="button">снарядить автоматически</button>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
