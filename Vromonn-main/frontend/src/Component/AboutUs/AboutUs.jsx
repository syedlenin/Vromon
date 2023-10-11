import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function AboutUs() {
    return (
        <MDBContainer id="aboutus">
            <h1 class="m-5 text-center">About Us</h1>
            <MDBRow className='mb-3'>
                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle class="b-4"><MDBIcon fas icon="hiking" /> Trained Experienced Guide</MDBCardTitle>

                            <MDBCardText>
                                We have special trained experienced guide, who will guid you towards your destination.In this case, we hire the local people so that you can get highest service as possible.Our guide is ready for any kind of situation,doesn't matter if it's tough or not.So,youcan enjoy your tour without bothering.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle><MDBIcon fas icon="shield-alt" /> Customer Security</MDBCardTitle>

                            <MDBCardText>
                                Travelling to an unknown place might be not easy for someone as there are many security issues in an unknown place.But with us,it's not a fact at all because we provide you the highest possible security if you travel via us.We have our special security force.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle><MDBIcon fas icon="handshake" />   Refund Policy</MDBCardTitle>

                            <MDBCardText>
                                We have the best refund policy compared to others.We provide you even upto 100% refund at the last moment cancelling.(5 hours before).Following this, we have 50%,20% refund on the cancellation before the journey starts.So, if theres any last moment rush you can easily concel your booking.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}