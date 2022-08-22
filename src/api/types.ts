export type ApiDataResponse<T> = {
  errorMessages: string | null;
  message: string;
  result: T;
  success: boolean;
};
