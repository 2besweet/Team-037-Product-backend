export const newUser = {
  firstName: 'bola',
  lastName: 'segun',
  email: 'abteezy@gmail.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0344652116',
  confirmationType: 'SMS'
};
export const editProfile = {
  firstName: 'bola',
  lastName: 'segun',
  imageUrl: 'https://www.imageurl.com',
  state: 'Abuja',
  address: '23 oduwaye lagos',
  city: 'FCT',
  dateOfBirth: '01/02/1999',
  accountName: 'Agbogun',
  accountNumber: '08064839273',
  bankName: 'GT Bank',
  country: 'ghana',
  phone: '0344652114',
};

export const emptyName = {
  firstName: '',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0903456789'
};


export const emptyPhone = {
  firstName: 'taiye',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: ''
};

export const conflict = {
  firstName: 'bola',
  lastName: 'segun',
  email: 'trwuup8383ed14@gmil.com',
  password: 'qwertyQ123@',
  address: '23 oduwaye lagos',
  phone: '0344652114'
};

export const loginUser = {
  username: 'dreezyy@hotmail.com',
  password: 'qwerte@123wwd'
};

export const wrongLoginUser = {
  username: 'emily@gmail.com',
  password: 'qwertyQ123'
};


const API_VERSION = '/api/v1/auth';
export const baseUrl = `${API_VERSION}/createUser`;
export const baseUrlLogin = `${API_VERSION}/signIn`;
export const baseUrlUpdateProfile = `${API_VERSION}/updateUser`;
export const getAllFarmProductUrl = '/api/v1/user/listAllFarmProduct';
