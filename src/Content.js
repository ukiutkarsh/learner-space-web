import { Router, Route, Switch, useLocation } from 'react-router-dom';
import Contact from './Contact';
import Music from './Music';
import Tech from './Tech';
import Home from './Home';
import Sports from './Sports'




const Content = (props) => {
    const writeReview = () => {
        if (props.args[0] === true & props.args[1, 2, 3] === false) {
            return <Music />;
            // <h1 style={{ color: "red" }}>Music Inventory</h1>    
        }
        if (props.args[1] === true & props.args[0, 2, 3] === false) {
            return <Sports />;
        }
        if (props.args[2] === true & props.args[0, 1, 3] === false) {
            return <Tech />;
        }
        if (props.args[3] === true & props.args[0, 1, 2] === false) {
            return <Contact />;
        }
    }
    return (
        <div className='content'>
            <br />
            <h1>Reviews Card</h1>
            <hr></hr>
            <br />
            <div className='reviews-box'>

                {writeReview()}

                {/* <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/sports" component={Sports} />
          </Switch> */}


            </div>
            

        </div>
    );
}

export default Content;

