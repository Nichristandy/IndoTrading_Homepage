
import './App.css';
import Navbar  from './component/Navbar';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom';
import Products from './component/Products';
import Footer from './component/Footer';
import Perusahaan from './component/Perusahaan';
import Jasa from './component/Jasa';

function App() {
  return (
    <>
    
      <Navbar/>      
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/products" component={Products}/>
        <Route exact path="/perusahaan" component={Perusahaan}/>
        <Route exact path="/jasa" component={Jasa}/>
      </Switch>
      <Footer/>


    
    </>
  );
}

export default App;
