import React from 'react';
import './Home.css';
import EventCard from './EventCard';
import img1 from './images/socialEvents1.png'
import img2 from './images/socialEvents2.png'
const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                {/* <h1>Our Helping To The World.</h1>
                <p>Onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut bore et dolore magnt, sed do eiusmod.</p> */}
            </section>
            <section className="mission">
                <h2>We Are In A Mission To Help The Helpless</h2>
                <div className="causes">
                    <div className="cause">
                        <h3>Clean Water</h3>
                        <p>The sea freight service has grown considerably in recent years...</p>
                    </div>
                    <div className="cause">
                        <h3>Healthy Food</h3>
                        <p>The sea freight service has grown considerably in recent years...</p>
                    </div>
                    <div className="cause">
                        <h3>Medical Care</h3>
                        <p>The sea freight service has grown considerably in recent years...</p>
                    </div>
                </div>
            </section>
            <div>
                <h1>We Arrange Many Social Events For Charity Donations</h1>
                <EventCard
                    image={img1}
                    title="Donation is Hope"
                    time="8:30 - 9:30am"
                    date="18.01.2021"
                    location="Athens, Greece"
                />
                <EventCard
                    image={img2}
                    title="A hand for Children"
                    time="8:30 - 9:30am"
                    date="18.01.2021"
                    location="Athens, Greece"
                />
            </div>

            <section className="about">
                <h2>We Are In A Mission To Help Helpless</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <button>About Us</button>
            </section>
        </div>
    );
};

export default Home;
