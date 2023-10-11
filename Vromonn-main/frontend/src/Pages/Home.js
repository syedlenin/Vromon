import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

// components
import Banner from '../Component/Banner/Banner';
import Packages from '../Component/Packages/Packages';
import Footer from '../Component/Footer/Footer';
import AboutUs from '../Component/AboutUs/AboutUs';
// import PackageForm from './PackageForm';

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if(response.ok) {
                setWorkouts(json);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            
            <React.Fragment>

                <Banner />
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                        <Packages key={workout._id} workout={workout} />
                    ))}
                </div>
                
                <AboutUs />
                <Footer />

            </React.Fragment>
        </div>
    )
};

export default Home;