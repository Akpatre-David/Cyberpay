export interface createResponse {
  statusCode: string;
  message: string;
  data: Data;
}

interface Data {
  bank: string;
  bvn: string;
  accountName: string;
  accountNumber: string;
}
