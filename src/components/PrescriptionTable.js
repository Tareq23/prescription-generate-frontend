
import React from "react";

const PrescriptionTable = ({ data }) => {
  const  prescriptions  = data;

  return (
    <div className="container mx-auto mt-6">
      {/* Here will be add search box, data limit */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Diagnosis</th>
            <th className="py-2 px-4 border-b">Medicines</th>
            <th className="py-2 px-4 border-b">Next Visit</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.content.map((prescription) => (
            <tr key={prescription.id}>
              <td className="py-2 px-4 border-b">{prescription.prescriptionDate}</td>
              <td className="py-2 px-4 border-b">{prescription.patientName}</td>
              <td className="py-2 px-4 border-b">{prescription.patientAge}</td>
              <td className="py-2 px-4 border-b">{prescription.patientGender}</td>
              <td className="py-2 px-4 border-b">{prescription.diagnosis}</td>
              <td className="py-2 px-4 border-b">{prescription.medicines}</td>
              <td className="py-2 px-4 border-b">{prescription.nextVisitDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={prescriptions.pageable.pageNumber === 0}
          onClick={() => console.log("Go to previous page")}
        >
          Previous
        </button>
        <span>
          Page {prescriptions.number + 1} of {prescriptions.totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={prescriptions.number + 1 === prescriptions.totalPages}
          onClick={() => console.log("Go to next page")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PrescriptionTable;
