// registrationApi.js
import { useRegisterMutation } from "../Redux/Services/AuthAPi";

export const registerUser = async (userData) => {
  const [register] = useRegisterMutation();
  try {
    const result = await register(userData);
    console.log(result)
    return result;
  } catch (error) {
    throw error;
  }
};
