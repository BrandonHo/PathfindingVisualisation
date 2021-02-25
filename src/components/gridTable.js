import Node from '../components/node';

const GridTable = ({gridData, handleMouseDown}) =>
(
    <table className="no-spacing">
        <tbody>
            {gridData.map((row, rowIndex) =>
                {
                    return (
                        <tr key={rowIndex}>
                            {row.map((node, nodeIndex) =>
                            {
                                const {rowIndex, colIndex, isStartNode, isEndNode, isVisited, isObstacle} = node;
                                return (
                                    <Node
                                        key={nodeIndex}
                                        rowIndex={rowIndex}
                                        colIndex={colIndex}
                                        isStartNode={isStartNode}
                                        isEndNode={isEndNode}
                                        isVisited={isVisited}
                                        isObstacle={isObstacle}
                                        onMouseDown={(rowIndex, colIndex) => handleMouseDown(rowIndex, colIndex)}
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