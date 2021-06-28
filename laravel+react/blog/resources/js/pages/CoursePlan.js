import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import Footer from '../components/Footer';
import CoursePlanItem from '../components/CoursePlanItem';

class CoursePlan extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <CoursePlanItem/>

                <Footer/>
               
            </Fragment>
        );
    }
}

export default CoursePlan;
