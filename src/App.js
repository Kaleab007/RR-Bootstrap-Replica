import './App.css';
import TopBar from './components/TopBar.js'
import Background from './components/Background'
import StoreListings from '.components/StoreListings';

function App() {
  return (
    <div className="App">
     <TopBar/>
     <StoreListings/>
     <Background/>
     </div>
  );
}

export default App;
