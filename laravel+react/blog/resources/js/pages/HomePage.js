import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/courseFeature";
import CoursePlanHome from '../components/coursePlanHome';
import PaymentGuide from '../components/PaymentGuide';
import FreeClassHome from '../components/FreeClassHome';
import MoreSeries from '../components/MoreSeries';
import Footer from '../components/Footer';



class HomePage extends Component {
    render() {
        return (
            <Fragment>
                     <Menu/>
           <HomeBanner/>
      
           <CourseFeature/>
          <CoursePlanHome/>
          <PaymentGuide/>
          <FreeClassHome/>
          <MoreSeries/>
          <Footer/>

            
        
            </Fragment>
        );
    }
}

export default HomePage;