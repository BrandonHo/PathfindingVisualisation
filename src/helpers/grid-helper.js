
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
        isVisited: false
    };

    return newGridNode;
}

export default {
    constructGrid
};