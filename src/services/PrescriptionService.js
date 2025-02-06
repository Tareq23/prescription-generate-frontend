
import API from './API';




  export const loadAllPrescription = async (_params) => {

    try{
      const response = await API.get("/prescription", {
        params: _params
      }); 
      return response.data;
    }
    catch(error){
      console.error("Error fetching data:", error.message);
      return null;
    }
  };



