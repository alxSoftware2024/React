import {Hello} from './componet/functional';
import Hi from './componet/classComponet';
import Fullname  from './componet/props';
import EventFunction from './componet/EventFunction'
import Event_on_class from './componet/Event_on_class'
import State from './componet/State'
import List from './componet/list';
import './App.css';
import Stylepage from './componet/Stylepage.js'
import InlineStyle from './componet/InlineStyle'
import Form from './componet/Form'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Router/Home';
import Contact from './Router/Contact';
import About from './Router/About';
function App() {
  return (
    <div className="App">
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Contact'>Contact Us</Link>
          </nav>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='*' element={<h1>Page Not Found</h1>}/>

</Routes>

     </Router>




     {/* <Fullname name="ASHENAFI">
      <p>Hello this is Ashenafi Tesfaye</p>
      <button>Click Me</button>
</Fullname>
     <Fullname name="FIKIRU"/>
     <Fullname name="KENA"/>
     //<EventFunction/>
 */}
 {/* <Event_on_class/> */}
 {/* <State /> */}
  {/* <List />  */}
 {/* <Stylepage heading={true}/> */}
 {/* <InlineStyle /> */}
 {/* <Form /> */}
    </div>
  );
}

export default App;
