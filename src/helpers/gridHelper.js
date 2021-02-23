function constructGrid(rowCount, colCount)
{
    const newGrid = [];
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++)
    {
        const currentRow = [];
        for (let colIndex = 0; colIndex < colCount; colIndex++)
            currentRow.push(createGridNode(rowIndex, colIndex));
        newGrid.push(currentRow);
    }

    return newGrid;
}

function createGridNode(rowIndex, colIndex)
{
    const newGridNode = 
    {
        rowIndex: rowIndex,
        colIndex: colIndex,
        isStartNode: false,
        isEndNode: false,
        isObstacle: false,
        isVisited: false,
        previousNode: null
    };

    return newGridNode;
}

function getIndicesFromRandomNodeInGrid(grid)
{
    let row;
    let col;
    let randomNode;

    do {
        row = Math.floor(Math.random() * grid.length);
        col = Math.floor(Math.random() * grid[row].length);
        randomNode = grid[row][col];

    } while (randomNode === null || randomNode.isEndNode || randomNode.isStartNode || randomNode.isObstacle);

    return {
        rowIndex: row,
        colIndex: col
    };
}

function constructNewGridWithObstacleToggle(oldGrid, rowIndex, colIndex)
{
    // Copy contents from old grid
    const newGrid = oldGrid.slice();

    // Get the node to be toggled
    const toggleNode = newGrid[rowIndex][colIndex];

    // Only toggle if the node is not a start or end node
    if (!toggleNode.isStartNode && !toggleNode.isEndNode)
        toggleNode.isObstacle = !toggleNode.isObstacle;
    
    // Return new grid
    return newGrid;
}

export default {
    constructGrid,
    constructNewGridWithObstacleToggle,
    getIndicesFromRandomNodeInGrid
};