import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import PrescriptionForm from "../components/PrescriptionForm/PrescriptionForm";
import PrivateRoute from "../components/PrivateRoute";
import PrescriptionTable from "../components/PrescriptionTable";
import {loadAllPrescription} from '../services/PrescriptionService';
import {Spinner, Alert} from 'react-bootstrap';
import RecordNotFound from "../components/RecordNotFound";

const Home = () => {

    const [prescriptions, setPrescriptions] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [params, setParams] = useState({page: 0, limit: 10});
 
    
    
    useEffect(() => {
        fetchData();
    }, [params]); 

    useEffect(() => {
        console.log("Updated prescriptions: ", prescriptions);
    }, [prescriptions]); 

    const fetchData = async () => {
        try{
            if(loading){
                const data = await loadAllPrescription(params);
                setPrescriptions(data);
                setLoading(false);
                console.log("prescriptions: ", prescriptions);
            }
          }
          catch(error){
            setError(error.message);
          }
          finally{
            setLoading(false);
          }
    }

    if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <>
            <div className="prescription">
                <div className="top">
                    <h2>List of Prescription</h2>
                    <Link to="/prescription/create">Create Prescription </Link>
                </div>
                <div className="body">
                    {prescriptions.content? (
                        <PrescriptionTable data={prescriptions}/>
                    ): <RecordNotFound/>}
                    <Routes>
                        <Route path="/prescription/create" element={
                            <PrivateRoute>
                                <PrescriptionForm />
                            </PrivateRoute>
                        } />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default Home;