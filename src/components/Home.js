import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


class Home extends Component {
    render() {
        return (
            <div>
                {/* <h1>Home</h1> */}
                <ImageSlider slides={SliderData} />;
            </div>

             
        );
    }
}
export default Home;
