import ConstantHelper from './constants';

function visualiseAlgorithm(visitedNodesOrdered, nodesFromPathToEndNode)
{
    visualiseVisitedNodes(visitedNodesOrdered);

    // Begin visualising the nodes from the path to end node AFTER visited nodes have been visualised
    setTimeout(() => {
        visualiseNodesFromPathToEndNode(nodesFromPathToEndNode);
    }, ConstantHelper.INITIAL_TIME_MULTIPLIER_VISITED_NODES * visitedNodesOrdered.length);
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

        }, ConstantHelper.INITIAL_TIME_MULTIPLIER_VISITED_NODES * i);
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

        }, ConstantHelper.INITIAL_TIME_MULTIPLIER_END_NODE_PATH * i);
    }
}

export default {
    visualiseAlgorithm
}