import DFSHelper from '../algorithms/dfs';
import NodeArrayHelper from '../helpers/nodeArrayHelper';

const COMMAND_ALGO_DFS = "dfs";

const NavBar = ({grid, startNodeIndices, endNodeIndices}) =>
(
    <nav id="navbar">
        <button
            type="button"
            className=""
            onClick={() => visualiseAlgo(COMMAND_ALGO_DFS, grid, startNodeIndices, endNodeIndices)}>
            DFS
        </button>
    </nav>
);

function visualiseAlgo(algoCommand, grid, startNodeIndices, endNodeIndices)
{
    let visitedNodesOrdered = [];
    let shortestPathNodes = [];

    switch (algoCommand) {
        case "dfs":
            visitedNodesOrdered = DFSHelper.dfs(grid, startNodeIndices, endNodeIndices);
            break;
        default:
            break;
    }

    shortestPathNodes = NodeArrayHelper.getNodesInShortestPathOrder(grid[endNodeIndices.rowIndex][endNodeIndices.colIndex]);


    animate(visitedNodesOrdered, shortestPathNodes);
    // console.log("Button test");
}

function animate(visitedNodesOrdered, shortestPathNodes)
{
    for (let i = 0; i <= visitedNodesOrdered.length; i++)
    {
        if (i === visitedNodesOrdered.length) {
            setTimeout(() => {
                animateShortestPath(shortestPathNodes);
            }, 10 * i);
            return;
        }

        setTimeout(() => {
            const node = visitedNodesOrdered[i];
            
            if (!node.isStartNode && !node.isEndNode)
            {
                document.getElementById(`node-${node.rowIndex}-${node.colIndex}`).className = 'node node-visited';
            }
        }, 10 * i);
        
    }
}

function animateShortestPath(shortestPathNodes)
{
    for (let i = 0; i < shortestPathNodes.length; i++)
    {
        setTimeout(() => {

            const node = shortestPathNodes[i];
            if (!node.isStartNode && !node.isEndNode)
            {
                document.getElementById(`node-${node.rowIndex}-${node.colIndex}`).className = 'node node-shortest-path';
            }
        }, 40 * i);
    }
}



export default NavBar;
