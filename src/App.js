import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/navbar';
import GridHelper from './helpers/gridHelper';
import GridTable from './components/gridTable';

function App() {

  const [startNodeIndices, setStartNodeIndices] = useState({});
  const [endNodeIndices, setEndNodeIndices] = useState({});
  const [grid, setGrid] = useState([]);
  const [isMousePressed, setMousePressStatus] = useState(false);

  // useEffect hook to mimic componentDidMount
  useEffect(() => {
      let grid = GridHelper.constructGrid(30, 30);

      let newStartNodeIndices = GridHelper.getIndicesFromRandomNodeInGrid(grid);
      grid[newStartNodeIndices.rowIndex][newStartNodeIndices.colIndex].isStartNode = true;
      setStartNodeIndices(newStartNodeIndices);

      let newEndNodeIndices = GridHelper.getIndicesFromRandomNodeInGrid(grid);
      grid[newEndNodeIndices.rowIndex][newEndNodeIndices.colIndex].isEndNode = true;
      setEndNodeIndices(newEndNodeIndices);

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

  const handleMouseDown = (row, col) => {

    const updatedGrid = GridHelper.constructNewGridWithObstacleToggle(grid, row, col);
    setGrid(updatedGrid);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          grid={grid}
          startNodeIndices={startNodeIndices}
          endNodeIndices={endNodeIndices} />
        <GridTable
            gridData={grid}
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
          />
      </header>
    </div>
  );
}

export default App;
