import ConstantHelper from '../helpers/constants';

function NavBar({performAlgorithmCallback})
{   
    return (
    <nav id="navbar">
        <button
            type="button"
            className=""
            onClick={() => performAlgorithmCallback(ConstantHelper.COMMAND_ALGO_DFS)}>
            DFS
        </button>
    </nav>);
}

export default NavBar;
