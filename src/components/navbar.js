import ConstantHelper from '../helpers/constants';
import IconButton from '../../node_modules/@material-ui/core/IconButton';
import GithubIcon from '../../node_modules/@material-ui/icons/GitHub';
import LinkedinIcon from '../../node_modules/@material-ui/icons/LinkedIn';

function NavBar({clearGridCallback, algoButtonCallback})
{   
    return (
    <nav id="navbar" class="navbar fixed-top navbar-dark bg-dark justify-content-between">

        <div>
            <a class="navbar-brand ms-3 h1">React Pathfinding Visualiser</a>

            <IconButton
                 href="https://github.com/BrandonHo"
                 color="inherit">
                <GithubIcon/>
            </IconButton>

            <IconButton
                 href="https://www.linkedin.com/in/brandon-ho-za/"
                 color="inherit">
                <LinkedinIcon/>
            </IconButton>
            
        </div>
        
        <div class="btn-toolbar" role="toolbar">
            <div class="btn group mr-2" role="group">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => algoButtonCallback(ConstantHelper.COMMAND_ALGO_DFS)}>
                    DFS
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => algoButtonCallback(ConstantHelper.COMMAND_ALGO_BFS)}>
                    BFS
                </button>
            </div>
            <div class="btn group mr-2" role="group">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => clearGridCallback()}>
                    Reset Grid
                </button>
            </div>
        </div>
    </nav>);
}

export default NavBar;
