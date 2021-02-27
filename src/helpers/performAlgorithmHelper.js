import DFSHelper from '../algorithms/dfs';
import BFSHelper from '../algorithms/bfs';
import ConstantHelper from '../helpers/constants';

function performAlgorithm(algorithmCommand, grid, startNodeIndices, endNodeIndices)
{
    var result = {};

    // Perform the selected algorithm...
    switch (algorithmCommand) {
        case ConstantHelper.COMMAND_ALGO_DFS:
            result = DFSHelper.PerformDFS(grid, startNodeIndices);
            break;
        case ConstantHelper.COMMAND_ALGO_BFS:
            result = BFSHelper.PerformBFS(grid, startNodeIndices);
            break;
        default:
            break;
    }

    return result;
}

export default {
    performAlgorithm
}