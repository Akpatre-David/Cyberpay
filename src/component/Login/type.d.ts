export interface LoginResponse {
  statusCode: number;
  message: string;
  data: string;
}

interface Data {
  email: string;
  token: string;
  businessName: string;
  businessType: string;
  businessEmail: string;
  country: string;
}

