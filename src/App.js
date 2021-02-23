import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/navbar';
import GridHelper from './helpers/grid-helper';
import GridTable from './components/gridTable';

function App() {

  const [grid, setGrid] = useState([]);
  const [isMousePressed, setMousePressStatus] = useState(false);

  // componentDidMount
  useEffect(() => {
      let grid = GridHelper.constructGrid(20, 20);
      setGrid(grid);
  }, []);

  const handleMouseEnter = (row, col) => {
    // if (!isMousePressed)
    // {
    //   const node = document.getElementById(`node-${row}-${col}`);
    //   node.class
    // }
    // console.log(row + " " + col)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <div className="grid">
            <GridTable
              gridData={grid}
              handleMouseEnter={handleMouseEnter}
            />
        </div>
      </header>
    </div>
  );
}

export default App;
