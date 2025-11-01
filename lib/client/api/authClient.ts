import axiosInstance from "../../../utils/axiosInstance";
import axios from "axios";




// log in
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


//sign up/create account
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

//logout
export async function signOut() {
  try {
    const response = await axiosInstance.get('/api/auth/signout');
    return response;
  } catch (error: unknown) {
    let message = 'Failed to sign out';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error(' error:', message);
    throw new Error(message);
  }
}


//get user profile
export async function getUserProfile() {
  try {
    const response = await axiosInstance.get('/api/profile');
    return response.data;
  } catch (error: unknown) {
    let message = 'Failed to sign up';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error(' error:', message);
    throw new Error(message);
  }
}


// /update avatar
export async function updateAvatar(avatar: File) {
  try {
    const formData = new FormData();
    formData.append('avatar', avatar);

    const response = await axiosInstance.post('/api/auth/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error: unknown) {
    let message = 'Failed to upload file';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error('Upload error:', message);
    throw new Error(message);
  }
}



//upload fil to aws
export async function uploadToS3(file: File) {
  try {

    let body = {
      fileName: file.name,
      filseSize: file.size,
      fileType: file.type

    }

    const response = await axiosInstance.post('/api/files/presign', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error: unknown) {
    let message = 'Failed to upload file';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    }

    console.error('Upload error:', message);
    throw new Error(message);
  }
}



