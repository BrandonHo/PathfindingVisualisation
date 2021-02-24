import DFSHelper from '../algorithms/dfs';

const COMMAND_ALGO_DFS = "dfs";

const INITIAL_TIME_MULTIPLIER_VISITED_NODES = 10;
const INITIAL_TIME_MULTIPLIER_END_NODE_PATH = 5;

const NavBar = ({grid, startNodeIndices, endNodeIndices}) =>
(
    <nav id="navbar">
        <button
            type="button"
            className=""
            onClick={() => performAlgorithm(COMMAND_ALGO_DFS, grid, startNodeIndices, endNodeIndices)}>
            DFS
        </button>
    </nav>
);

function performAlgorithm(algoCommand, grid, startNodeIndices, endNodeIndices)
{
    // Object that will hold both visited nodes + nodes from to end node (from algorithm)
    let result = {};

    // Perform the selected algorithm...
    switch (algoCommand) {
        case COMMAND_ALGO_DFS:
            result = DFSHelper.PerformDFS(grid, startNodeIndices);
            break;
        default:
            break;
    }

    // ... then visualise the results
    visualiseAlgorithm(result.visitedNodesOrdered, result.nodesFromPathToEndNode);
}

function visualiseAlgorithm(visitedNodesOrdered, nodesFromPathToEndNode)
{
    visualiseVisitedNodes(visitedNodesOrdered);

    // Begin visualising the nodes from the path to end node AFTER visited nodes have been visualised
    setTimeout(() => {
        visualiseNodesFromPathToEndNode(nodesFromPathToEndNode);
    }, INITIAL_TIME_MULTIPLIER_VISITED_NODES * visitedNodesOrdered.length);
}

function visualiseVisitedNodes(visitedNodesOrdered)
{
    for (let i = 0; i < visitedNodesOrdered.length; i++)
    {
        setTimeout(() => {
            const currentNode = visitedNodesOrdered[i];
            
            // Color all nodes in the array that were visited in the algorithm
            if (!currentNode.isStartNode && !currentNode.isEndNode)
                document.getElementById(`node-${currentNode.rowIndex}-${currentNode.colIndex}`).className = 'node node-visited';

        }, INITIAL_TIME_MULTIPLIER_VISITED_NODES * i);
    }
}

function visualiseNodesFromPathToEndNode(nodesFromPathToEndNode)
{
    for (let i = 0; i < nodesFromPathToEndNode.length; i++)
    {
        setTimeout(() => {
            const node = nodesFromPathToEndNode[i];

            // Color all nodes in the array that are in the end node path
            if (!node.isStartNode && !node.isEndNode)
                document.getElementById(`node-${node.rowIndex}-${node.colIndex}`).className = 'node node-end-path';

        }, INITIAL_TIME_MULTIPLIER_END_NODE_PATH * i);
    }
}

export default NavBar;
