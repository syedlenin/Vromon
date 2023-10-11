import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Banner() {
    return (
        <MDBCarousel class="my-2" showIndicators showControls fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>Explore The Mountains</h5>
                <p>Visit the exclusive mountain spots with us</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                alt='...'
            >
                <h5>Explore History</h5>
                <p>Our Foreign Packages gives you chance to know the world better</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                alt='...'
            >
                <h5>Become a phillosoper</h5>
                <p>Exploring the teaches you more about your life</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}