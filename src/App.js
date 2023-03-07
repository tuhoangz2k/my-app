import './resetcss.css';
import './App.css';
import Content from './components/Content';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
