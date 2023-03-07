import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './resetcss.css';
import './App.css';
import Content from './components/Content';
import SideBar from './components/SideBar';
import useViewport from './hooks/useViewport';

function App() {
  const deviceWidth = useViewport().width;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(() => {
    if (deviceWidth > 768 && isOpenMenu) {
      setIsOpenMenu(false);
    }
  }, [deviceWidth]);
  const handleCloseMenu = (e) => {
    setIsOpenMenu(false);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="wrap-sidebar">
          {deviceWidth > 768 ? (
            <SideBar />
          ) : (
            <>
              <span className="menu" onClick={() => setIsOpenMenu(true)}>
                <AiOutlineMenu size={32} />
              </span>
              {isOpenMenu && (
                <div className="modal" onClick={handleCloseMenu}>
                  <SideBar handleCloseMenu={handleCloseMenu} />
                </div>
              )}
            </>
          )}
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
