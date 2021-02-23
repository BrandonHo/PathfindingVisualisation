import Node from '../components/node';

const GridTable = ({gridData, handleMouseEnter}) =>
(
    <table class="no-spacing">
        <tbody>
            {gridData.map((row, rowIndex) =>
                {
                    return (
                        <tr key={rowIndex}>
                            {row.map((node, nodeIndex) =>
                            {
                                const {rowIndex, colIndex, isStart, isEnd, isVisited, isObstacle} = node;
                                return (
                                    <Node
                                        key={nodeIndex}
                                        rowIndex={rowIndex}
                                        colIndex={colIndex}
                                        isStart={isStart}
                                        isEnd={isEnd}
                                        isVisited={isVisited}
                                        isObstacle={isObstacle}
                                        onMouseEnter={(rowIndex, colIndex) => handleMouseEnter(rowIndex, colIndex)}
                                    />
                                );
                            })}
                        </tr>
                    );
                }
            )}
        </tbody>
    </table>
)

export default GridTable;