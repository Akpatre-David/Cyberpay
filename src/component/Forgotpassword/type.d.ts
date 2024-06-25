export interface ForgotResponse {
  statusCode: number;
  message: string;
  data: Data;
}

interface Data {
  email: string;
}
