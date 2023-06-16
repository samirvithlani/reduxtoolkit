import logo from './logo.svg';
import './App.css';
import { ProductComponent } from './component/ProductComponent';
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductComponent/>
    </div>
  );
}

export default App;
