import API from "./API";

export const signIn = async (credentials) => {
  try{
    const response = await API.post("/auth/login", credentials); 
    const token = response.data.token;
    console.log('response', response)
    localStorage.setItem("p-gen-auth-token", token);
    return response.data;
  }
  catch(e){

  }
 
};

export const signUp = async (userData) => {
  const response = await API.post("/auth/signup", userData); 
  const token = response.data.token;
    console.log('response', response)
    localStorage.setItem("p-gen-auth-token", token);
    return response.data;
};

export const logout = () => {
  localStorage.removeItem("p-gen-auth-token");
};

