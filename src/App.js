import React, {Component} from 'react';
import logo from './img/logo.png';
import logo_sticky from './img/logo_sticky.png';
import './sass/style.scss';
import './css/app-custome.scss';
import slide_1 from './img/home_slider/slide_1.jpg';
import slide_2 from './img/home_slider/slide_2.jpg';
import slide_3 from './img/home_slider/slide_3.jpg';
import first_slider_img from './img/home_slider/first_slider_img.png';

import hotel_1 from './img/hotel_1.jpg';
import hotel_2 from './img/hotel_1.jpg';
import hotel_3 from './img/hotel_1.jpg';
import hotel_4 from './img/hotel_1.jpg';
import RevSlider, {Slide, Caption} from 'react-rev-slider';
// import Carousel from 'nuka-carousel';
import $ from 'jquery';


const config = {
    arrows: false,
    delay: 9000,
    startwidth: 1170,
    startheight: 500,
    hideThumbs: 10,
    fullWidth: "on",
    forceFullWidth: "on"
};

class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div id="page">
                <header className="header menu_fixed">
                    <div id="preloader">
                        <div data-loader="circle-side"/>
                    </div>
                    <div id="logo">
                        <a href="index.html">
                            <img src={logo} width="150" height="36" data-retina="true" alt=""
                                 className="logo_normal"/>
                            <img src={logo_sticky} width="150" height="36" data-retina="true" alt=""
                                 className="logo_sticky"/>
                        </a>
                    </div>
                    <a href="#menu" className="btn_mobile">
                        <div className="hamburger hamburger--spin" id="hamburger">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"/>
                            </div>
                        </div>
                    </a>
                    <nav id="menu" className="main-menu">
                        <ul>
                            <li><span><a href="#0">Home</a></span>
                                <ul>
                                    <li><a href="index.html">Home version 1</a></li>
                                    <li><a href="index-2.html">Home version 2</a></li>
                                    <li><a href="index-3.html">Home version 3</a></li>
                                    <li><a href="index-4.html">Home version 4</a></li>
                                    <li><a href="index-5.html">Home version 5</a></li>
                                    <li><a href="index-6.html">With Cookie bar (EU law)</a></li>
                                    <li><a href="index-7.html">Home version 7</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Tours</a></span>
                                <ul>
                                    <li><a href="tours-grid-isotope.html">Tours grid isotope</a></li>
                                    <li><a href="tours-grid-sidebar.html">Tours grid sidebar</a></li>
                                    <li><a href="tours-grid-sidebar-2.html">Tours grid sidebar 2</a></li>
                                    <li><a href="tours-grid.html">Tours grid simple</a></li>
                                    <li><a href="tours-list-isotope.html">Tours list isotope</a></li>
                                    <li><a href="tours-list-sidebar.html">Tours list sidebar</a></li>
                                    <li><a href="tours-list-sidebar-2.html">Tours list sidebar 2</a></li>
                                    <li><a href="tours-list.html">Tours list simple</a></li>
                                    <li><a href="tour-detail.html">Tour detail</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Hotels</a></span>
                                <ul>
                                    <li><a href="hotels-grid-isotope.html">Hotel grid isotope</a></li>
                                    <li><a href="hotels-grid-sidebar.html">Hotel grid sidebar</a></li>
                                    <li><a href="hotels-grid-sidebar-2.html">Hotel grid sidebar 2</a></li>
                                    <li><a href="hotels-grid.html">Hotel grid simple</a></li>
                                    <li><a href="hotels-list-isotope.html">Hotel list isotope</a></li>
                                    <li><a href="hotels-list-sidebar.html">Hotel list sidebar</a></li>
                                    <li><a href="hotels-list-sidebar-2.html">Hotel list sidebar 2</a></li>
                                    <li><a href="hotels-list.html">Hotel list simple</a></li>
                                    <li><a href="hotel-detail.html">Hotel detail</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Eat &amp; Drink</a></span>
                                <ul>
                                    <li><a href="restaurants-grid-isotope.html">Restaurant grid isotope</a></li>
                                    <li><a href="restaurants-grid-sidebar.html">Restaurant grid sidebar</a></li>
                                    <li><a href="restaurants-grid-sidebar-2.html">Restaurant grid sidebar 2</a></li>
                                    <li><a href="restaurants-grid.html">Restaurant grid simple</a></li>
                                    <li><a href="restaurants-list-isotope.html">Restaurant list isotope</a></li>
                                    <li><a href="restaurants-list-sidebar.html">Restaurant list sidebar</a></li>
                                    <li><a href="restaurants-list-sidebar-2.html">Restaurant list sidebar 2</a></li>
                                    <li><a href="restaurants-list.html">Restaurant list simple</a></li>
                                    <li><a href="restaurant-detail.html">Restaurant detail</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Pages</a></span>
                                <ul>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="media-gallery.html">Media gallery</a></li>
                                    <li><a href="help.html">Help Section</a></li>
                                    <li><a href="faq.html">Faq Section</a></li>
                                    <li><a href="wishlist.html">Wishlist page</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Extra</a></span>
                                <ul>
                                    <li><a href="menu-options.html">Menu Position Options</a></li>
                                    <li><a href="tour-detail-singlemonth-datepicker.html">Single month Datepicker</a>
                                    </li>
                                    <li><a href="404.html">404 Error page</a></li>
                                    <li><a href="cart-1.html">Cart page 1</a></li>
                                    <li><a href="cart-2.html">Cart page 2</a></li>
                                    <li><a href="cart-3.html">Cart page 3</a></li>
                                    <li><a href="pricing-tables.html">Responsive pricing tables</a></li>
                                    <li><a href="coming_soon/index.html">Coming soon</a></li>
                                    <li><a href="invoice.html">Invoice</a></li>
                                    <li><a href="icon-pack-1.html">Icon pack 1</a></li>
                                    <li><a href="icon-pack-2.html">Icon pack 2</a></li>
                                    <li><a href="icon-pack-3.html">Icon pack 3</a></li>
                                    <li><a href="icon-pack-4.html">Icon pack 4</a></li>
                                    <li><a href="hamburgers.html">Animated Hamburgers</a></li>
                                </ul>
                            </li>
                            <li><span><a href="#0">Buy template</a></span></li>
                        </ul>
                    </nav>

                </header>

                <main>
                    {/* Ref: https://reactjsexample.com/a-pure-reactjs-carousel-component */}

                    <RevSlider config={config}>
                        <Slide
                            src="https://webgradients.com/public/webgradients_png/085%20October%20Silence.png"
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
                                <h2 className="bheader">Vytech Enterprise</h2>
                            </Caption>


                            <Caption class="tp-caption skewfromrightshort fadeout banner-image"
                                     data-x="0"
                                     data-y="0"
                                     data-speed="500"
                                     data-start="1200"
                                     data-easing="Power4.easeOut"
                            >
                                <img className="tab-img"
                                     src={first_slider_img}
                                     alt="fsd"/>
                            </Caption>


                        </Slide>


                    </RevSlider>


                    <div className="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
                        <section className="add_bottom_45">
                            <div className="main_title_3">
                                <span><em></em></span>
                                <h2>Popular Hotels and Accommodations</h2>
                                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <a href="hotel-detail.html" className="grid_item">
                                        <figure>
                                            <div className="score"><strong>8.9</strong></div>
                                            <img src={hotel_1} className="img-fluid" alt=""/>
                                            <div className="info">
                                                <div className="cat_star"><i className="icon_star"/><i
                                                    className="icon_star"/><i className="icon_star"/><i
                                                    className="icon_star"/></div>
                                                <h3>Mariott Hotel</h3>
                                            </div>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <a href="hotel-detail.html" className="grid_item">
                                        <figure>
                                            <div className="score"><strong>7.9</strong></div>
                                            <img src={hotel_2} className="img-fluid" alt=""/>
                                            <div className="info">
                                                <div className="cat_star"><i className="icon_star"/><i
                                                    className="icon_star"/><i className="icon_star"/><i
                                                    className="icon_star"/></div>
                                                <h3>Concorde Hotel </h3>
                                            </div>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <a href="hotel-detail.html" className="grid_item">
                                        <figure>
                                            <div className="score"><strong>7.0</strong></div>
                                            <img src={hotel_3} className="img-fluid" alt=""/>
                                            <div className="info">
                                                <div className="cat_star"><i className="icon_star"/><i
                                                    className="icon_star"/><i className="icon_star"/><i
                                                    className="icon_star"/></div>
                                                <h3>Louvre Hotel</h3>
                                            </div>
                                        </figure>
                                    </a>
                                </div>

                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <a href="hotel-detail.html" className="grid_item">
                                        <figure>
                                            <div className="score"><strong>8.9</strong></div>
                                            <img src={hotel_4} className="img-fluid" alt=""/>
                                            <div className="info">
                                                <div className="cat_star"><i className="icon_star"/><i
                                                    className="icon_star"/><i className="icon_star"/><i
                                                    className="icon_star"/></div>
                                                <h3>Park Yatt Hotel</h3>
                                            </div>
                                        </figure>
                                    </a>
                                </div>

                            </div>

                            <a href="hotels-grid-isotope.html"><strong>View all (157) <i
                                className="arrow_carrot-right"/></strong></a>
                        </section>

                    </div>


                    <div className="call_section">
                        <div className="container clearfix">
                            <div className="col-lg-5 col-md-6 float-right wow" data-wow-offset="250">
                                <div className="block-reveal">
                                    <div className="block-vertical"/>
                                    <div className="box_1">
                                        <h3>Enjoy a GREAT travel with us</h3>
                                        <p>Ius cu tamquam persequeris, eu veniam apeirian platonem qui, id aliquip
                                            voluptatibus pri. Ei mea primis ornatus disputationi. Menandri erroribus cu
                                            per, duo solet congue ut. </p>
                                        <a href="#0" className="btn_1 rounded">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <footer>
                    <div className="container margin_60_35">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 p-r-5">
                                <p><img src="img/logo.png" width="150" height="36" data-retina="true" alt=""/></p>
                                <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates
                                    definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi
                                    indoctum an vix, ut delectus expetendis vis.</p>

                            </div>
                            <div className="col-lg-2 col-md-6 ml-lg-auto">
                                <h5>Useful links</h5>
                                <ul className="links">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="blog.html">News &amp; Events</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 ml-lg-auto">
                                <h5>Useful links</h5>
                                <ul className="links">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="blog.html">News &amp; Events</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>Contact with Us</h5>
                                <ul className="contacts">
                                    <li><a href="tel://61280932400"><i className="ti-mobile"/> + 61 23 8093 3400</a>
                                    </li>
                                    <li><a href="mailto:info@Panagea.com"><i className="ti-email"/> info@Panagea.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr/>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="follow_us">
                                    <ul>
                                        <li>Follow us</li>
                                        <li><a href="#0"><i className="ti-facebook"/></a></li>
                                        <li><a href="#0"><i className="ti-twitter-alt"/></a></li>
                                        <li><a href="#0"><i className="ti-google"/></a></li>
                                        <li><a href="#0"><i className="ti-pinterest"/></a></li>
                                        <li><a href="#0"><i className="ti-instagram"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul id="additional_links">
                                    <li><a href="#0">Terms and conditions</a></li>
                                    <li><a href="#0">Privacy</a></li>
                                    <li><span>© 2018 Panagea</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App;
