import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBIcon
} from 'mdb-react-ui-kit';
import bandarban from '../../Bandarban.jpg'
import sajek from '../../Sajek.jpg'
// import useWor

export default function Packages({ workout }) {

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {

        }
    };

    return (
        <MDBContainer id="pack">
            <h1 class="m-5 text-center">Our Packages</h1>
            <MDBRow className='mb-3'>
                <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>{workout.title}</MDBCardTitle>
                            <MDBCardText>
                                <p>{workout.description}</p>
                                <p><small>Created at:{workout.createdAt}</small></p>
                                <span onClick={handleClick}>delete</span>
                            </MDBCardText>
                            <MDBBtn href='/product'><MDBIcon fas icon="shopping-cart" /> Book now {workout.price} BDT</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={bandarban} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Bandarban</MDBCardTitle>
                            <MDBCardText>
                                Bandarban has been the most beautiful tourist destination of Bangladesh in recent years. Nature has adorned this region with its magnificent and splendid green ornaments. Beauty is scattered everywhere of Bandarban in magnanimous mood.
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon="shopping-cart" /> Book now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={sajek} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Sajek Valley</MDBCardTitle>
                            <MDBCardText>
                                ajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon="shopping-cart" /> Book now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol> */}
            </MDBRow>
        </MDBContainer>
    );
}