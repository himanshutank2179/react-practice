import React, {Component} from 'react';
import ReactGA from "react-ga";

class Support extends Component {
    componentDidMount() {
        document.title = "Support";
        ReactGA.initialize('UA-115615990-1');
        ReactGA.pageview('/support');
    }

    render() {
        return (
            <main>
                <section className="hero_in restaurants">
                    <div className="wrapper">
                        <div className="container">
                            <h1 className="fadeInUp"><span/>Support</h1>
                        </div>
                    </div>
                </section>


            </main>
        );
    }
}

export default Support;