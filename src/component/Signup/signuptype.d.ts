export interface signupResponse {
  data: string;
  message: string;
  statusCode: number;
}

interface Data {
  businessEmail: string;
  businessName: string;
  businessType: string;
  confirmPassword: string;
  country: string;
  password: string;
  phoneNumber: number;
}
