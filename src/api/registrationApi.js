// registrationApi.js
import { useRegisterMutation } from "../Redux/Services/AuthAPi";

export const registerUser = async (userData) => {
  const [register] = useRegisterMutation();
  try {
    const result = await register(userData);
    return result;
  } catch (error) {
    throw error;
  }
};
