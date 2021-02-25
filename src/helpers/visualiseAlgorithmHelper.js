import ConstantHelper from './constants';

let timeoutsForVisualisingAlgorithm = [];

function visualiseAlgorithm(visitedNodesOrdered, nodesFromPathToEndNode)
{
    // Clear array to store all new timeouts constructed for visualising the algorithm
    timeoutsForVisualisingAlgorithm = [];

    visualiseVisitedNodes(visitedNodesOrdered);

    // Intialise timeout for visualising nodes from path to end node (starts after visited nodes visualised)
    const timeoutToStartEndPathVisualisation = setTimeout(() => {
        visualiseNodesFromPathToEndNode(nodesFromPathToEndNode);
    }, ConstantHelper.INITIAL_TIME_MULTIPLIER_VISITED_NODES * visitedNodesOrdered.length);

    timeoutsForVisualisingAlgorithm.push(timeoutToStartEndPathVisualisation);
}

function visualiseVisitedNodes(visitedNodesOrdered)
{
    for (let i = 0; i < visitedNodesOrdered.length; i++)
    {
        const timeoutForVisitedNode = setTimeout(() => {
            const currentNode = visitedNodesOrdered[i];
            
            // Color all nodes in the array that were visited in the algorithm
            if (!currentNode.isStartNode && !currentNode.isEndNode)
                document.getElementById(`node-${currentNode.rowIndex}-${currentNode.colIndex}`).className = 'node node-visited';

        }, ConstantHelper.INITIAL_TIME_MULTIPLIER_VISITED_NODES * i);

        timeoutsForVisualisingAlgorithm.push(timeoutForVisitedNode);
    }
}

function visualiseNodesFromPathToEndNode(nodesFromPathToEndNode)
{
    for (let i = 0; i < nodesFromPathToEndNode.length; i++)
    {
        const timeoutForNodeFromPathToEndNode = setTimeout(() => {
            const node = nodesFromPathToEndNode[i];

            // Color all nodes in the array that are in the end node path
            if (!node.isStartNode && !node.isEndNode)
                    document.getElementById(`node-${node.rowIndex}-${node.colIndex}`).className = 'node node-end-path';

        }, ConstantHelper.INITIAL_TIME_MULTIPLIER_END_NODE_PATH * i);

        timeoutsForVisualisingAlgorithm.push(timeoutForNodeFromPathToEndNode);
    }
}

function clearTimeouts()
{
    for (let timeoutIndex = 0; timeoutIndex < timeoutsForVisualisingAlgorithm.length; timeoutIndex++)
        clearTimeout(timeoutsForVisualisingAlgorithm[timeoutIndex]);
}

export default {
    visualiseAlgorithm,
    clearTimeouts
}