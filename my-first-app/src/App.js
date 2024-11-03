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
 {/* <Event_on_class/> */}
 {/* <State /> */}
  {/* <List />  */}
 {/* <Stylepage heading={true}/> */}
 {/* <InlineStyle /> */}
 <Form />
    </div>
  );
}

export default App;
