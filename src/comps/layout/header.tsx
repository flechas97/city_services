import SimpleBottomNavigation from "./../menu";
import Drawer from '@material-ui/core/Drawer';

export default function Header() {

    return (
        <>
            <div className="header">
                <div className="wrapperNav">
                    <div className="menuNav">
                       
                    </div>
                    <div className="titlePage">
                        <h1>TITULO</h1>
                    </div>
                </div>
            </div>
            <div style={{position:"fixed",bottom:"0",left:"0",zIndex:"999"}}>
                <SimpleBottomNavigation />

            </div>
        </>
    )
    
}