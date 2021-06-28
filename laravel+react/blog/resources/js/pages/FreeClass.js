import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import Footer from '../components/Footer';


class FreeClass extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
             
               <Footer/>
            </Fragment>
        );
    }
}

export default FreeClass;