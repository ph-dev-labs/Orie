import { useRegisterMutation } from "../Redux/Services/AuthAPi";

export const registerUser = async (userData) => {
    const [register] = useRegisterMutation();
  
    try {
      const response = await register(userData);
      if (response.error) {
        // Handle the error, e.g., by throwing an exception
        throw new Error(response.error.message ,"weeeee");
      }
  
      if (response.status === 200) {
        // Registration was successful
        return response.data; // or any other desired result
      } else {
        // Handle other status codes as needed
        throw new Error(`Registration failed with status code ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  };
  