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

function selectStartNode(grid)
{
    let startNodeIndices = getIndicesFromRandomNodeInGrid(grid);
    grid[startNodeIndices.rowIndex][startNodeIndices.colIndex].isStartNode = true;
    return startNodeIndices;
}

function selectEndNode(grid)
{
    let endNodeIndices = getIndicesFromRandomNodeInGrid(grid);
    grid[endNodeIndices.rowIndex][endNodeIndices.colIndex].isEndNode = true;
    return endNodeIndices;
}

function constructNewGridWithObstacleToggle(oldGrid, toggleRowIndex, toggleColIndex)
{
    // Copy contents from old grid...
    const newGrid = oldGrid.slice();

    // ... then toggle the selected node
    const toggleNode = newGrid[toggleRowIndex][toggleColIndex];
    if (!toggleNode.isStartNode && !toggleNode.isEndNode)
        toggleNode.isObstacle = !toggleNode.isObstacle;
    
    return newGrid;
}

function constructNewGridWithReset(oldGrid)
{
    // Copy contents from old grid...
    const newGrid = oldGrid.slice();

    // Reset visitation status for each node + reset class name (to reset styling)
    for (let rowIndex = 0; rowIndex < oldGrid.length; rowIndex++)
    {
        for (let colIndex = 0; colIndex < oldGrid[rowIndex].length; colIndex++)
        {
            const currentNode = newGrid[rowIndex][colIndex];
            currentNode.isVisited = false;
            currentNode.isObstacle = false;

            if (!currentNode.isStartNode && !currentNode.isEndNode)
                document.getElementById(`node-${currentNode.rowIndex}-${currentNode.colIndex}`).className = "node";
        }
    }
    
    return newGrid;
}

export default {
    constructGrid,
    constructNewGridWithObstacleToggle,
    constructNewGridWithReset,
    getIndicesFromRandomNodeInGrid,
    selectStartNode,
    selectEndNode
};