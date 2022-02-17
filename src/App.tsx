import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { AppRouter, Navbar } from './components';


function App() {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div >
  );
}

export default App;
