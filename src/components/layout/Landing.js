import React, {Component} from 'react';
import RevSlider, {Caption, Slide} from "react-rev-slider";
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import slide_1 from "../../img/home_slider/slide_1.jpg";
import first_slider_img from "../../img/home_slider/first_slider_img.png";
import slide_2 from "../../img/home_slider/slide_2.jpg";
import slide_3 from "../../img/home_slider/slide_3.jpg";
import beuty_salon from '../../img/beuty-salon.jpg';
import spa from '../../img/spa.jpg';
import barber from '../../img/barber.jpg';
import skin_care from '../../img/skin-care.jpg';
import first_slide_flex_img from '../../img/tab_a.PNG';
import second_slide_flex_img from '../../img/second_banner_img.png';
import {Tabs, TabPanel} from '@zendeskgarden/react-tabs';
import ModalVideo from 'react-modal-video'
import '../../css/landing.scss'


import $ from 'jquery';
import play_store_download from "../../img/play-store-download.png";
import beauty_salon_bg from "../../img/who can use/beauty-min.jpg";
import Feature from "../common/Feature";
import SmallHeader from "../common/SmallHeader";
import ReactWOW from "react-wow";
import banner_report from '../../img/banner_report.png'

const config = {
    arrows: false,
    delay: 9000,
    startwidth: 1170,
    startheight: 650,
    hideThumbs: 10,
    fullWidth: "on",
    forceFullWidth: "on"
};

class Landing extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    openModal(id) {
        this.setState({
            isOpen: {
                [id]: true
            }
        });
    }

    render() {
        let tabs = [
            'How to book appointment with Shapemore?',
            'Editing made easy',
            'Review and Pay',
            'Detailed Summary of your reports',
            'Launch promotional offers via SMS'
        ];
        return (
            <div>
                <main>
                    {/* Ref: https://reactjsexample.com/a-pure-reactjs-carousel-component */}

                    <RevSlider config={config}>
                        <Slide
                            src={slide_1}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}

                        >

                            <Caption class="tp-caption skewfromrightshort fadeout banner-main-header"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <h2 className="bheader">Hassle free appointments</h2>
                                <p>Appointments just a click away.</p>
                                <a href="https://play.google.com/store/apps/details?id=com.shapemore"
                                   target="_blank"> <img className="playstore-btn" src={play_store_download} width={170}
                                                         alt="Download Shapemore Android Application"/> </a>
                            </Caption>


                            <Caption class="tp-caption skewfromrightshort fadeout banner-image"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <img className="tab-img"
                                     src={first_slide_flex_img}
                                     alt="shapemore tablet and mobile image"/>

                            </Caption>


                        </Slide>

                        <Slide
                            src={slide_1}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}

                        >

                            <Caption class="tp-caption skewfromrightshort fadeout banner-main-header"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <h2 className="bheader">Your Comfort is our <br/> Topmost Priority</h2>
                                <p>Flexible Timings.</p>
                                <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                            </Caption>


                            <Caption class="tp-caption skewfromrightshort fadeout banner-image"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <img className="tab-img"
                                     src={second_slide_flex_img}
                                     alt="shapemore tablet and mobile image"/>

                            </Caption>


                        </Slide>

                        <Slide
                            src={slide_1}
                            alt="slidebg1"
                            data-bgfit="cover"
                            data-bgposition="left top"
                            data-bgrepeat="no-repeat"
                            slideProperties={{
                                'data-transition': "fade",
                                'data-slotamount': "7",
                                'data-masterspeed': "1500"
                            }}

                        >

                            <Caption class="tp-caption skewfromrightshort fadeout banner-main-header"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <h2 className="bheader">Professional Business <br/> Approach</h2>
                                <p>Manage your business efficiently.</p>
                                <a href="https://play.google.com/store/apps/details?id=com.shapemore"
                                   target="_blank"> <img className="playstore-btn" src={play_store_download} width={170}
                                                         alt="Download Shapemore Android Application"/> </a>
                            </Caption>


                            <Caption class="tp-caption skewfromrightshort fadeout banner-image"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <img className="tab-img"
                                     src={banner_report}
                                     alt="shapemore tablet and mobile image"/>

                            </Caption>


                        </Slide>


                    </RevSlider>


                    <div className="container-fluid pt-5 pl-lg-5 pr-lg-5">
                        <section className="add_bottom_45">
                            <SmallHeader title="Who can use?"
                                         subTitle="   "/>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <Link to="/beauty-salon" className="grid_item">
                                        <figure>


                                            <LazyLoadImage
                                                afterLoad={() => {
                                                    setTimeout(() => {
                                                        $('.grid_item > figure > span').removeClass('lazy-load-image-background');
                                                    }, 1000)
                                                }}
                                                alt="Beuty Salon"
                                                className="img-fluid"
                                                effect="blur"
                                                src={beuty_salon}/>

                                            <div className="info">
                                                <h3>Beauty Salon</h3>
                                            </div>
                                        </figure>
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <Link to="/spa-and-massage" className="grid_item">
                                        <figure>

                                            <LazyLoadImage
                                                afterLoad={() => {
                                                    setTimeout(() => {
                                                        $('.grid_item > figure > span').removeClass('lazy-load-image-background');
                                                    }, 1000)
                                                }}
                                                alt="Spa"
                                                className="img-fluid"
                                                effect="blur"
                                                src={spa}/>
                                            <div className="info">
                                                <h3>Spa & Massage</h3>
                                            </div>
                                        </figure>
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <Link to="/barber" className="grid_item">
                                        <figure>

                                            <LazyLoadImage
                                                afterLoad={() => {
                                                    setTimeout(() => {
                                                        $('.grid_item > figure > span').removeClass('lazy-load-image-background');
                                                    }, 1000)
                                                }}
                                                alt="Barber"
                                                className="img-fluid"
                                                effect="blur"
                                                src={barber}/>
                                            <div className="info">
                                                <h3>Barber</h3>
                                            </div>
                                        </figure>
                                    </Link>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <Link to="/skin-care" className="grid_item">
                                        <figure>
                                            <LazyLoadImage
                                                afterLoad={() => {
                                                    setTimeout(() => {
                                                        $('.grid_item > figure > span').removeClass('lazy-load-image-background');
                                                    }, 1000)
                                                }}
                                                alt="Skin Care"
                                                className="img-fluid"
                                                effect="blur"
                                                src={skin_care}/>
                                            <div className="info">
                                                <h3>Skin Care</h3>
                                            </div>
                                        </figure>
                                    </Link>
                                </div>

                            </div>

                        </section>

                    </div>


                    <div className="container-fluid pl-lg-5 pr-lg-5">
                        <SmallHeader title="Features"
                                     subTitle="   "/>
                        <div className="row">
                            <Feature
                                url="/calendar-feature-details"
                                icon="icon-calendar-7"
                                title="Calendar"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Booking an appointment was never so easy</li>
                                            <li>No need to run for pen and paper</li>
                                            <li>Shapemore helps you to keep reminders in order to avoid loss of business
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                url="/pos-feature-details"
                                icon="icon-doc-text"
                                title="Point Of Sale"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Increase your sales & profitability</li>
                                            <li>Saves time spent on Administration</li>
                                            <li>Quick checkout and accept payment with different mode</li>
                                            <li>Get a printer which will enable you to print receipts</li>
                                        </ul>
                                    </div>
                                }

                            />

                            <Feature
                                url="/customer-management-feature-details"
                                icon="icon-group"
                                title="Manage your customers"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Manage your customers tactfully</li>
                                            <li>Attract your customers with the best in industry service, hassle free
                                                appointments
                                            </li>
                                            <li>Can send Information about Promotional Offers to Loyal Customers</li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                url="/notification-feature-details"
                                icon="icon-bell"
                                title="Send Notification"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Enables you to retain customers</li>
                                            <li>Helps you to target right customers</li>
                                            <li>Increase your conversion ratio</li>
                                            <li>Improves customer experience</li>
                                            <li>Cost effective marketing/ branding</li>
                                            <li>Encourage User engagement</li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                url="/automated-sms-marketing-feature-details"
                                icon="icon-mail-alt"
                                title="Automated SMS Marketing"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Easy way of campaigning with constant support</li>
                                            <li>Target the right customers. Grow your customer base. Increase business
                                                efficiently
                                            </li>
                                            <li>Effective way of marketing and reach the masses just at your finger
                                                tip
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                url="/sales-report-feature-details"
                                icon="icon-chart-bar-outline"
                                title="Customize Sales Report"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Any business efficiency is based on its sales</li>
                                            <li>Get customised report based on your requirement</li>
                                            <li>Helps you in organising or managing business strategies</li>
                                            <li>Gives you an insight into top selling services</li>
                                            <li>Improves your overall performance</li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                icon="icon-mobile-1"
                                title="Mobile Apps for Business Owner"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>A user friendly application which makes it easy for you to access even
                                                when
                                                you are not at office
                                            </li>
                                            <li>Get updated about your business performance, Sales, Inventory Etc. even
                                                when
                                                you are traveling all this at the tip of your finger
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />

                            <Feature
                                icon="icon-user-delete"
                                title="Reduce No-Shows"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Use Automated reminders</li>
                                            <li>Minimise the waiting time</li>
                                            <li>Be thankful to customers who arrives on time</li>
                                            <li>Scheduled appointments as soon as you
                                                receive a call
                                            </li>
                                            <li>Ensure after sales service by taking feedback from the customers</li>
                                        </ul>
                                    </div>
                                }

                            />

                            <Feature
                                icon="icon-doc-text"
                                title="Expense Management"
                                subTitle={
                                    <div>
                                        <ul className="text-left home-feature-list">
                                            <li>Expense management gives you insight into the expenses occurred via
                                                different channels for eg: EMI, FEES, Utility bills, Rent, Inventory
                                                etc.
                                            </li>
                                            <li>It also gives you an idea about the overall business performance</li>
                                            <li>It explores a new horizon, wherein you can allocate funds as per the
                                                requirement. You can audit as well as manage funds efficiently & wisely
                                                handle it
                                            </li>
                                        </ul>
                                    </div>
                                }
                            />


                        </div>

                    </div>


                    {/*Quick Video Tour*/}

                    {/*<div className="container-fluid pl-lg-5 pr-lg-5 mb-5">
                        <SmallHeader title="Quick Video Tour"
                                     subTitle="Scan through our tutorials/ demonstrations."/>

                        <div className="row">
                            <Tabs vertical>

                                {tabs.map((tab, index) => (
                                    <TabPanel label={tab} key={index}>
                                        <div className="video-container">
                                            <img src="https://img.youtube.com/vi/KfjHb24OeZc/maxresdefault.jpg"
                                                 width="100%" alt=""
                                                 onClick={this.openModal.bind(this, index)}/>

                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen[index]}
                                                        videoId='KfjHb24OeZc'/>

                                        </div>
                                    </TabPanel>
                                ))}
                            </Tabs>;
                        </div>
                    </div>*/}


                    <div className="call_section">
                        <div className="container clearfix">

                            <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
                                <div className="block-reveal">
                                    <div className="block-vertical"/>
                                    <div className="box_1">
                                        <h4>LOOKING FORWARD TO A LONG TERM ASSOCIATION?</h4>
                                        <br/>
                                        <Link to="/contact" className="btn_1 rounded">Get a demo</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="container-fluid pl-lg-5 pr-lg-5 pt-5 pb-5" id="faq">

                        <SmallHeader title="Frequently Asked Questions"
                                     subTitle=""/>

                        <div role="tablist" className="add_bottom_45 accordion_2" id="payment">

                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapseOne_payment" aria-expanded="true"><i
                                            className="indicator ti-angle-down"/>How can I associate with Shapemore?</a>
                                    </h5>
                                </div>

                                <div id="collapseOne_payment" className="collapse" role="tabpanel"
                                     data-parent="#payment">
                                    <div className="card-body">
                                        <p>Just a call away/ Sign up for a Demo.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo_payment"
                                           aria-expanded="false">
                                            <i className="indicator ti-angle-down"/>Are there any discounts?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo_payment" className="collapse" role="tabpanel"
                                     data-parent="#payment">
                                    <div className="card-body">
                                        <p>Yes you can enjoy all the benefits up to 30 days for free.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree_payment"
                                           aria-expanded="false">
                                            <i className="indicator ti-angle-down"/>Is it easily accessible via smart
                                            devices?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseThree_payment" className="collapse" role="tabpanel"
                                     data-parent="#payment">
                                    <div className="card-body">
                                        <p>Certainly we are available on all Android Phone/Tablet systems.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseFour_payment"
                                           aria-expanded="false">
                                            <i className="indicator ti-angle-down"/>How to print a receipt?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseFour_payment" className="collapse" role="tabpanel"
                                     data-parent="#payment">
                                    <div className="card-body">
                                        <p>Print a receipt with Thermal Printer, just a click away. you can also send
                                            receipt – via email/SMS to your customer.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" role="tab">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseFive_payment"
                                           aria-expanded="false">
                                            <i className="indicator ti-angle-down"/>How do i recharge my SMS balance?
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseFive_payment" className="collapse" role="tabpanel"
                                     data-parent="#payment">
                                    <div className="card-body">
                                        <p> Go to "More" tab -> Setting -> inside Manage section you'll find "Purchase
                                            SMS" option .</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </main>
            </div>
        );
    }
}

Landing.propTypes = {};

export default Landing;