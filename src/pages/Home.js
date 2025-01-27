import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import PrescriptionForm from "../components/PrescriptionForm/PrescriptionForm";
import PrivateRoute from "../components/PrivateRoute";

const Home = () => {
    return (
        <>
            <div className="prescription">
                <div className="top">
                    <h2>List of Prescription</h2>
                    <Link to="/prescription/create">Create Prescription </Link>
                </div>
                <div className="body">
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