import API from "./API";

export const signIn = async (credentials) => {
  const response = await API.post("/signin", credentials); 
  const token = response.data.token;
  localStorage.setItem("p-gen-auth-token", token);
  return response.data;
};

export const signUp = async (userData) => {
  const response = await API.post("/signup", userData); 
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("p-gen-auth-token");
};

export const isLogin = () => {
  let token = localStorage.getItem("p-gen-auth-token");
  return true;
  return token == null ? false : true;
}
