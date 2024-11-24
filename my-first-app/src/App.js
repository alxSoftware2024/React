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
import Usestates from './Hooks/Usestates'
import Usestates2 from './Hooks/Usestates2'
import Usestates3 from './Hooks/Usestates3'
import Useeffect1 from './Hooks/Useeffect1'
import Useeffect2 from './Hooks/Useeffect2'
import Usecontext from './Hooks/Usecontext'
import UseRef from './Hooks/UseRef'
import UseRef2 from './Hooks/UseRef2'
import UseReducer from './Hooks/UseReducer';
import {useState} from 'react'
import React from 'react'
import Bears from './zustand/Bears'
import CatList from './zustand/CatList'
import CatList2 from './zustand/CatList2'
import CatList3 from './zustand/CatList3'
import Formik from './Formik/Formik'
import Formik2 from './Formik/Formik2'

import SWRExample from './dataHandling/SWRExample'
import ReactQueryExample from './dataHandling/ReactQueryExample'
import { QueryClient, QueryClientProvider } from 'react-query';
import NestedRouting from './Router/NestedRouting'

//export const custmerName=React.createContext()

export const Ownercontext=React.createContext()
// Create a client
const queryClient = new QueryClient();
function App() {
  // const [name,setName]=useState('Ashenafi')

  return (
    <div className="App">
      {/* NestedRouting */}
      <NestedRouting/>
      {/* DATA HANDLING USING useQuery*/}
     {/* <QueryClientProvider client={queryClient}>
    <ReactQueryExample />
  </QueryClientProvider> */}
  {/* DATA HANDLING USING SWR*/}
{/* <SWRExample/>  */}
{/* Formik */}
 {/* <Formik2/>  */}
      {/* <CatList/>
      <CatList2/>
      <CatList3/> */}
      {/* <Bears/> */}
      {/* <UseReducer/> */}
      {/* <UseRef2/> */}
      {/* <UseRef/> */}
{/* <Usestates3/> */}

      {/* <custmerName.Provider value={"Ashenafi"}>
<Usecontext2/>
      </custmerName.Provider> */}
{/* { <Ownercontext.Provider value={'Ashenafi'}>
<Usecontext2/>

</Ownercontext.Provider> } */}
      {/* <Useeffect2/> */}
      {/* <Useeffect1/> */}
      {/* <Usestates2/> */}
      {/* <Usestates/> */}
        {/* <Router>
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

     </Router> */}




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
