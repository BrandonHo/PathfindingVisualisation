import ConstantHelper from '../helpers/constants';

function NavBar({clearGridCallback, algoButtonCallback})
{   
    return (
    <nav id="navbar">
        <button
            type="button"
            className=""
            onClick={() => clearGridCallback()}>
            Reset Grid
        </button>
        <button
            type="button"
            className=""
            onClick={() => algoButtonCallback(ConstantHelper.COMMAND_ALGO_DFS)}>
            DFS
        </button>
        <button
            type="button"
            className=""
            onClick={() => algoButtonCallback(ConstantHelper.COMMAND_ALGO_BFS)}>
            BFS
        </button>
    </nav>);
}

export default NavBar;
