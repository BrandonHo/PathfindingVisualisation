let visitedNodesOrdered = [];
let nodesFromPathToEndNode = [];

function PerformBFS(grid, startNodeIndices)
{
    visitedNodesOrdered = [];
    nodesFromPathToEndNode = [];

    const helperQueue = [];
    helperQueue.push(grid[startNodeIndices.rowIndex][startNodeIndices.colIndex]);

    while (helperQueue.length)
    {
        const currentNode = helperQueue.shift();

        if (currentNode.isEndNode)
        {
            nodesFromPathToEndNode = getNodesFromPathToEndNode(currentNode);
            break;
        }

        if (currentNode.isVisited || currentNode.isObstacle)
            continue;

        if (currentNode.isStartNode || !currentNode.isVisited)
        {
            currentNode.isVisited = true;
            visitedNodesOrdered.push(currentNode);

            tryAddNeighbourNode(helperQueue, currentNode, grid, currentNode.rowIndex, currentNode.colIndex - 1);
            tryAddNeighbourNode(helperQueue, currentNode, grid, currentNode.rowIndex, currentNode.colIndex + 1);
            tryAddNeighbourNode(helperQueue, currentNode, grid, currentNode.rowIndex - 1, currentNode.colIndex);
            tryAddNeighbourNode(helperQueue, currentNode, grid, currentNode.rowIndex + 1, currentNode.colIndex);
        }
    }

    return {visitedNodesOrdered, nodesFromPathToEndNode};
}

function tryAddNeighbourNode(helperQueue, currentNode, grid, rowIndex, colIndex)
{
    const neighbourNode = tryGetNonVisitedNode(grid, rowIndex, colIndex);
    if (neighbourNode !== null)
    {
        neighbourNode.previousNode = currentNode;
        helperQueue.push(neighbourNode);
    }
}

function tryGetNonVisitedNode(grid, rowIndex, colIndex)
{
    if (rowIndex < 0 || rowIndex >= grid.length || colIndex < 0 || colIndex >= grid[rowIndex.length])
        return null;

    if (grid[rowIndex][colIndex].isVisited)
        return null;

    return grid[rowIndex][colIndex];
}

function getNodesFromPathToEndNode(endNode)
{
    const resultPath = [];

    while (endNode !== null)
    {
        resultPath.unshift(endNode);
        endNode = endNode.previousNode;
    }

    return resultPath;
}

export default {
    PerformBFS
}