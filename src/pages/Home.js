import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import PrescriptionForm from "../components/PrescriptionForm/PrescriptionForm";
import PrivateRoute from "../components/PrivateRoute";
import PrescriptionTable from "../components/PrescriptionTable";
import {data} from '../services/PrescriptionService';

const Home = () => {

    const data = {
        content: [
          {
            id: 4,
            prescriptionDate: "2024-05-25",
            patientName: "Yeamin",
            patientAge: 28,
            patientGender: "MALE",
            diagnosis: "B-Trait",
            medicines: "Paracetamol, Fexo",
            nextVisitDate: "2024-02-06",
          },
          {
            id: 5,
            prescriptionDate: "2024-05-25",
            patientName: "Yeamin",
            patientAge: 28,
            patientGender: "MALE",
            diagnosis: "B-Trait",
            medicines: "Paracetamol, Fexo",
            nextVisitDate: "2024-02-06",
          },
          {
            id: 6,
            prescriptionDate: "2024-05-25",
            patientName: "Yeamin",
            patientAge: 28,
            patientGender: "MALE",
            diagnosis: "B-Trait",
            medicines: "Paracetamol, Fexo",
            nextVisitDate: "2024-02-06",
          },
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 3,
          sort: {
            empty: true,
            sorted: false,
            unsorted: true,
          },
          offset: 0,
          paged: true,
          unpaged: false,
        },
        last: false,
        totalElements: 8,
        totalPages: 3,
        size: 3,
        number: 0,
        sort: {
          empty: true,
          sorted: false,
          unsorted: true,
        },
        first: true,
        numberOfElements: 3,
        empty: false,
      };
    

    return (
        <>
            <div className="prescription">
                <div className="top">
                    <h2>List of Prescription</h2>
                    <Link to="/prescription/create">Create Prescription </Link>
                </div>
                <div className="body">
                    <PrescriptionTable data={data}/>
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