import { Response } from 'express';

export interface ApiResponseContract {
  success: boolean;
  message: string;
  data: any;
}

export type ApiResponse = Response<ApiResponseContract>;
