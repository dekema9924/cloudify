import { use } from "react";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";



export async function signupUser(username: string, email: string, password: string) {
  try {
    const response = await axiosInstance.post('/api/auth/signup', { username, email, password });
    return response.data;
  } catch (error: unknown) {
    let message = 'Failed to sign up';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error('Signup error:', message);
    throw new Error(message);
  }
}



export async function signinUser(email: string, password: string) {
  try {
    const response = await axiosInstance.post('/api/auth/signin', { email, password });
    return response.data;
  } catch (error: unknown) {
    let message = 'Failed to sign up';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error('Signup error:', message);
    throw new Error(message);
  }
}

