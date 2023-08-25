export interface ProjectResponse<T = Project[]> {
  isSuccess: boolean;
  value: T;
  error: string;
}

export default interface Project {
  title: string;
  description: string;
  photoUrl: string;
  FileUrl: string | null;
  id: string;
}
