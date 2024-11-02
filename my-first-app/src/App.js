import {Hello} from './componet/functional';
import Hi from './componet/classComponet';
import Fullname  from './componet/props';
import EventFunction from './componet/EventFunction'
import Event_on_class from './componet/Event_on_class'

import './App.css';
function App() {
  return (
    <div className="App">
     
     {/* <Fullname name="ASHENAFI">
      <p>Hello this is Ashenafi Tesfaye</p>
      <button>Click Me</button>
</Fullname>
     <Fullname name="FIKIRU"/>
     <Fullname name="KENA"/>
     //<EventFunction/>
 */}
 <Event_on_class/>
    </div>
  );
}

export default App;
