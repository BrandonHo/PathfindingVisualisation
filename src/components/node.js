import './node.css';

const Node = ({rowIndex, colIndex, isStartNode, isEndNode, isObstacle, isVisited, onMouseDown, onMouseEnter}) =>
{
    const extraNodeClassName = isEndNode? 'node-end'
    : isStartNode? 'node-start'
    : isObstacle? 'node-obstacle'
    : '';

    return (<td
        id={`node-${rowIndex}-${colIndex}`}
        className={`node ${extraNodeClassName}`}
        onMouseDown={() => onMouseDown(rowIndex, colIndex)}
        onMouseEnter={() => onMouseEnter(rowIndex, colIndex)}
        // onMouseUp={() => onMouseUp(rowIndex, colIndex)}
    ></td>);
}

export default Node;
