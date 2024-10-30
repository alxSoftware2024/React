import {Hello} from './componet/functional';
import Hi from './componet/classComponet';
import Fullname  from './componet/props';
import './App.css';
function App() {
  return (
    <div className="App">
     
     <Fullname name="ASHENAFI">
      <p>Hello this is Ashenafi Tesfaye</p>
</Fullname>
     <Fullname name="FIKIRU"/>
     <Fullname name="KENA"/>

    </div>
  );
}

export default App;
