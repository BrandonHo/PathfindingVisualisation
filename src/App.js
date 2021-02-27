import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import NavBar from './components/navbar';
import GridHelper from './helpers/gridHelper';
import GridTable from './components/gridTable';

import VisualiseAlgorithmHelper from './helpers/visualiseAlgorithmHelper';
import PerformAlgorithmHelper from './helpers/performAlgorithmHelper';

function App() {

    const mounted = useRef();

    const [visitedNodesOrdered, setVisitedNodesOrdered] = useState([]);
    const [nodesFromPathToEndNode, setNodesFromPathToEndNode] = useState([]);
    const [isVisualisingAlgorithm, setVisualiseAlgorithmStatus] = useState(false);

    const [startNodeIndices, setStartNodeIndices] = useState({});
    const [endNodeIndices, setEndNodeIndices] = useState({});
    const [grid, setGrid] = useState([]);

    useEffect(() => {

        // Mimic componentDidMount
        if (!mounted.current)
        {
            // Construct grid, select start + end nodes, then update state with grid
            let grid = GridHelper.constructGrid(20, 20);
            setStartNodeIndices(GridHelper.selectStartNode(grid));
            setEndNodeIndices(GridHelper.selectEndNode(grid));
            setGrid(grid);

            mounted.current = true;
        }
        // Mimic componentDidUpdate
        else
        {
            if (isVisualisingAlgorithm)
                VisualiseAlgorithmHelper.visualiseAlgorithm(visitedNodesOrdered, nodesFromPathToEndNode);
        }
    });

    const handleMouseDown = (selectedRowIndex, selectedColIndex) => {

        if (isVisualisingAlgorithm)
            return;

        const updatedGrid = GridHelper.constructNewGridWithObstacleToggle(grid, selectedRowIndex, selectedColIndex);
        setGrid(updatedGrid);
    }

    const clearGridCallback = () =>
    {
        // Clear any existing timeouts that are used for visualising algorithms + reset visualising status
        VisualiseAlgorithmHelper.clearTimeouts();
        setVisualiseAlgorithmStatus(false);

        // Lastly, reset grid visit status + class names for nodes
        setGrid(GridHelper.constructNewGridWithReset(grid));
    }

    const algoButtonCallback = (buttonCommandString) =>
    {
        // Only allow callbacks if not already visualising an algorithm
        if (isVisualisingAlgorithm)
            return;

        // Object that will hold both visited nodes + nodes from to end node (from algorithm)
        const result = PerformAlgorithmHelper.performAlgorithm(buttonCommandString, grid, startNodeIndices, endNodeIndices);
        
        // Update state with results + state to visualise algorithm
        setVisitedNodesOrdered(result.visitedNodesOrdered);
        setNodesFromPathToEndNode(result.nodesFromPathToEndNode);
        setVisualiseAlgorithmStatus(true);
    }

    return (
        <div className="App">
        <header className="App-header">
            <NavBar
                clearGridCallback={clearGridCallback}
                algoButtonCallback={algoButtonCallback}
            />
            <GridTable
                gridData={grid}
                handleMouseDown={handleMouseDown}
            />
        </header>
        </div>
    );
}

export default App;
