function dfs(grid, startNodeIndices, endNodeIndices)
{
    let visitedNodesOrdered = [];
    let startNode = grid[startNodeIndices.rowIndex][startNodeIndices.colIndex];
    let endNode = grid[endNodeIndices.rowIndex][endNodeIndices.colIndex];

    let nextNodeStack = [];
    nextNodeStack.push(startNode);

    while (nextNodeStack.length)
    {
        const currentNode = nextNodeStack.pop();

        if (currentNode == endNode)
            return visitedNodesOrdered;

        if (!currentNode.isObstacle && (!currentNode.isVisited || currentNode.isStartNode))
        {
            currentNode.isVisited = true;
            visitedNodesOrdered.push(currentNode);

            const {rowIndex, colIndex} = currentNode;

            const leftNode = getNodeFromGrid(grid, rowIndex, colIndex - 1);
            const rightNode = getNodeFromGrid(grid, rowIndex, colIndex + 1);
            const topNode = getNodeFromGrid(grid, rowIndex - 1, colIndex);
            const bottomNode = getNodeFromGrid(grid, rowIndex + 1, colIndex);

            if (leftNode !== null)
            {
                leftNode.previousNode = currentNode;
                nextNodeStack.push(leftNode);
            }

            if (rightNode !== null)
            {
                rightNode.previousNode = currentNode;
                nextNodeStack.push(rightNode);
            }

            if (topNode !== null)
            {
                topNode.previousNode = currentNode;
                nextNodeStack.push(topNode);
            }
                
            if (bottomNode !== null)
            {
                bottomNode.previousNode = currentNode;
                nextNodeStack.push(bottomNode);
            }
        }
    }

    return visitedNodesOrdered;
}

function getNodeFromGrid(grid, rowIndex, colIndex)
{
    if (rowIndex < 0 || rowIndex >= grid.length || colIndex < 0 || colIndex >= grid[rowIndex].length)
        return null;

    if (grid[rowIndex][colIndex].isVisited)
        return null;

    return grid[rowIndex][colIndex];
}

export default {
    dfs
}