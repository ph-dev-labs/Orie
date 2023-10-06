import { useConfirmOtpMutation } from "../Redux/Services/AuthAPi";

export const confirmOtp = async (otp, email) => {
  const [confirmation] = useConfirmOtpMutation();

  try {
    const response = await confirmation(otp, email);

    if (response.error) {
      // Handle the error, e.g., by throwing an exception
      throw new Error(response.error.message);
    }

    if (response.status === 200) {
      // OTP confirmation was successful
      return response.data; // or any other desired result
    } else {
      // Handle other status codes as needed
      throw new Error(`OTP confirmation failed with status code ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
