export interface ApiResponse<T> {
  isSuccess: boolean;
  value: T | null;
  error: string | null;
}
