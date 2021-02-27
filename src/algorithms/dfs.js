let nodesFromPathToEndNode = [];
let visitedNodesOrdered = [];

function PerformDFS(grid, startNodeIndices)
{
    // Reset arrays that will store node data
    visitedNodesOrdered = [];
    nodesFromPathToEndNode = [];

    DFS(grid, startNodeIndices.rowIndex, startNodeIndices.colIndex);

    return {visitedNodesOrdered, nodesFromPathToEndNode};
}

function DFS(grid, rowIndex, colIndex)
{
    // Ignore invalid grid indices
    if (rowIndex < 0 || rowIndex >= grid.length || colIndex < 0 || colIndex >= grid[rowIndex].length)
        return null;

    const currentNode = grid[rowIndex][colIndex];

    // Ignore visited nodes
    if (currentNode.isVisited)
        return null;

    // If found end node, then we have found a path to end node - stop.
    if (currentNode.isEndNode)
        return currentNode;

    // Only deal with nodes that are non-obstacles or start nodes
    if (!currentNode.isObstacle || currentNode.isStartNode)
    {
        // Update visited status + add to list of visited nodes
        currentNode.isVisited = true;
        visitedNodesOrdered.push(currentNode);

        /*
            Do DFS on neighbour nodes, which prioritises nodes in order of left, right
            top, and bottom. Note: will only check the second neighbouring node if the
            first neighbouring node path ended in a deadend (i.e null).
        */

        let checkNode = DFS(grid, rowIndex, colIndex - 1);
        checkNode = (checkNode === null? DFS(grid, rowIndex, colIndex + 1) : checkNode);
        checkNode = (checkNode === null? DFS(grid, rowIndex - 1, colIndex) : checkNode);
        checkNode = (checkNode === null? DFS(grid, rowIndex + 1, colIndex) : checkNode);

        // If check node defined, then we have a path to the end node
        if (checkNode !== null)
        {
            nodesFromPathToEndNode.unshift(checkNode);
            return currentNode;
        }
    }

    // If we reached here, then all neighbouring nodes resulted in deadend - return null
    return null;
}

export default {
    PerformDFS
}