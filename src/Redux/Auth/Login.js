import { AsyncStorage } from 'react-native';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const ASYNC_STORAGE_KEY = 'Auth_token'; // Consistent key for AsyncStorage

const initialState = {
  user: null,
  token: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null; // Clear any previous errors on successful login
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      AsyncStorage.removeItem(ASYNC_STORAGE_KEY)
        .catch((error) => {
          console.error('Error clearing token from AsyncStorage:', error);
        });
    },
  },
});

export const { loginFailure, loginSuccess, logout } = loginSlice.actions;

export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;

const handleTokenStorage = async (token) => {
  try {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEY, token);
  } catch (error) {
    console.error('Error storing token in AsyncStorage:', error);
    throw new Error('Token storage failed');
  }
};

export const moveToShopPage = (emailField, passwordField, setIsLoading, loginApi) => {
  return async (dispatch) => {
    setIsLoading(true);

    try {
      const loginResponse = await loginApi( {emailField, passwordField} ).unwrap();
      const { data } = loginResponse;
      console.log(data)
      setIsLoading(false);

      await handleTokenStorage(data.token);

      dispatch(loginSuccess({ user: data.user, token: data.token }));

      const navigate = useNavigation();
      navigate.navigate('buyer-interface');
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      dispatch(loginFailure(error.message));
    }
  };
};