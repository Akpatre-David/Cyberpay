import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type HttpMethod = "get" | "post" | "put" | "delete";

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface RequestOptions {
  token?: string;
  headers?: Record<string, string>;
}

async function apiRequest<T>(
  method: HttpMethod,
  path: string,
  data?: any,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    if (!baseUrl) {
      throw new Error("Base URL is not defined in the enviroment variable");
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json", // assuming JSON content
      ...(options.headers || {}),
    };

    if (options.token) {
      headers["Authorization"] = `Bearer ${options.token}`; // Corrected interpolation
    }

    const url = `${baseUrl}${path}`;

    const config: AxiosRequestConfig = {
      method,
      url,
      data,
      headers,
    };

    const response: AxiosResponse<T> = await axios(config);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    // Handle error
    throw error;
  }
}

export default apiRequest;
