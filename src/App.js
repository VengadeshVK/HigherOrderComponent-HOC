import './App.css';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';
// Example 2
import Welcome from './example 2/Welcome';
import SecondHOC from './example 2/SecondHOC';
import Once from './example 2/Once';
import Twice from './example 2/Twice';

function App() {

  const SecondNewComponent = SecondHOC(Welcome)
  const IncByOne = SecondHOC(Once)
  const IncByTwo = SecondHOC(Twice)

  return (
    <div className="App">
      hello 
      {/* <Profile />
      <Dashboard /> */}

      {/* Example Two */}

      <Welcome name="vk"/>
      <SecondNewComponent name="vengadesh"/>
      {/* Counter example
      <Once />
      <Twice /> */}
      {/*Counter example after applying HOC so its in blue background  */}
      <IncByOne />
      <IncByTwo />
    </div>
  );
}

export default App;
