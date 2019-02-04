import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import CalendarFeatureDetails from './components/calendar-feature-details/CalendarFeatureDetails';
import Footer from './components/layout/Footer';
import NotificationFeatureDetails from './components/notification-feature-details/NotificationFeatureDetails';
import CustomerFeatureDetails from './components/customer-management-feature-details/CustomerFeatureDetails';
import SalesReportFeatureDetails from './components/sales-report-feature-details/SalesReportFeatureDetails';
import PosFeatureDetails from './components/pos-feature-details/PosFeatureDetails';
import AutoSmsMaretingFeatureDetails from './components/automated-sms-marketing/AutoSmsMaretingFeatureDetails';
import Support from './components/support/Support';
import Contact from './components/contact/Contact';
import Beautysalon from "./components/beauty-salon/Beautysalon";
import ReactGA from 'react-ga';

import './sass/style.scss';
import './css/app-custome.scss';
import $ from 'jquery';
import SpaMassage from "./components/spa-and-massage/SpaMassage";
import Barber from "./components/barber/Barber";
import SkinCare from "./components/skin-care/SkinCare";
import TermsAndConditions from "./components/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import '@zendeskgarden/react-tabs/dist/styles.css';

import {ThemeProvider} from '@zendeskgarden/react-theming';


class App extends Component {


    constructor() {
        super();
    }

    componentDidMount() {
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/');
    }


    render() {
        return (
            <ThemeProvider>
                <Router>
                    <div id="page">
                        <Navbar/>

                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/support" component={Support}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/beauty-salon" component={Beautysalon}/>
                            <Route path="/spa-and-massage" component={SpaMassage}/>
                            <Route path="/barber" component={Barber}/>
                            <Route path="/skin-care" component={SkinCare}/>
                            <Route path="/terms-and-conditions" component={TermsAndConditions}/>
                            <Route path="/privacy-policy" component={PrivacyPolicy}/>
                            <Route path="/calendar-feature-details" component={CalendarFeatureDetails}/>
                            <Route path="/notification-feature-details" component={NotificationFeatureDetails}/>
                            <Route path="/customer-management-feature-details" component={CustomerFeatureDetails}/>
                            <Route path="/sales-report-feature-details" component={SalesReportFeatureDetails}/>
                            <Route path="/pos-feature-details" component={PosFeatureDetails}/>
                            <Route path="/automated-sms-marketing-feature-details"
                                   component={AutoSmsMaretingFeatureDetails}/>
                        </Switch>
                        <Footer/>

                    </div>
                </Router>
            </ThemeProvider>


        );
    }
}

export default App;
