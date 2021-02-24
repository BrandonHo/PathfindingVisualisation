import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from './components/navbar';
import GridHelper from './helpers/gridHelper';
import GridTable from './components/gridTable';

import DFSHelper from './algorithms/dfs';
import ConstantHelper from './helpers/constants';
import VisualiseAlgorithmHelper from './helpers/visualiseAlgorithmHelper';


function App() {

    const mounted = useRef();

    const [visitedNodesOrdered, setVisitedNodesOrdered] = useState([]);
    const [nodesFromPathToEndNode, setNodesFromPathToEndNode] = useState([]);
    const [isVisualisingAlgorithm, setVisualiseAlgorithmStatus] = useState(false);

    const [startNodeIndices, setStartNodeIndices] = useState({});
    const [endNodeIndices, setEndNodeIndices] = useState({});
    const [grid, setGrid] = useState([]);
    const [isMousePressed, setMousePressStatus] = useState(false);

    useEffect(() => {

        // Mimic componentDidMount
        if (!mounted.current)
        {
            let grid = GridHelper.constructGrid(30, 30);

            // Randomly select a start node from grid
            let newStartNodeIndices = GridHelper.getIndicesFromRandomNodeInGrid(grid);
            grid[newStartNodeIndices.rowIndex][newStartNodeIndices.colIndex].isStartNode = true;
            setStartNodeIndices(newStartNodeIndices);
        
            // Randomly select a end node from grid
            let newEndNodeIndices = GridHelper.getIndicesFromRandomNodeInGrid(grid);
            grid[newEndNodeIndices.rowIndex][newEndNodeIndices.colIndex].isEndNode = true;
            setEndNodeIndices(newEndNodeIndices);
        
            // Set new grid data
            setGrid(grid);

            mounted.current = true;
        }
        // Mimic componentDidUpdate
        else
        {
            if (isVisualisingAlgorithm)
            {
                VisualiseAlgorithmHelper.visualiseAlgorithm(visitedNodesOrdered, nodesFromPathToEndNode);
            }
        }
    });

    const handleMouseEnter = (row, col) => {
        
    }

    const handleMouseDown = (row, col) => {

        if (!isVisualisingAlgorithm)
        {
            const updatedGrid = GridHelper.constructNewGridWithObstacleToggle(grid, row, col);
            setGrid(updatedGrid);
        }
    }

    const performAlgorithmCallback = (algoCommandString) =>
    {
        // Only allow callbacks if not already visualising an algorithm
        if (isVisualisingAlgorithm)
            return;

        // Object that will hold both visited nodes + nodes from to end node (from algorithm)
        let result = {};

        // Perform the selected algorithm...
        switch (algoCommandString) {
            case ConstantHelper.COMMAND_ALGO_DFS:
                result = DFSHelper.PerformDFS(grid, startNodeIndices);
                break;
            default:
                break;
        }
        
        // Update state with results + state to visualise algorithm
        setVisitedNodesOrdered(result.visitedNodesOrdered);
        setNodesFromPathToEndNode(result.nodesFromPathToEndNode);
        setVisualiseAlgorithmStatus(true);
    }

    return (
        <div className="App">
        <header className="App-header">
            <NavBar
                performAlgorithmCallback={performAlgorithmCallback}
            />
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
