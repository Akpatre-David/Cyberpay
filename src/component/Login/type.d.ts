export interface LoginResponse {
  statusCode: number;
  message: string;
  data: Data;
}

interface Data {
  email: string;
  token: string;
  businessName: string;
  businessType: string;
  businessEmail: string;
  country: string;
}
