export interface ApiResponse<T> {
  isSuccess: boolean;
  value: T | null;
  error: string | null;
}

export interface ProjectResponse<T = Project[]> {
  isSuccess: boolean;
  value: T;
  error: string;
}

export interface Project {
  title: string;
  description: string;
  photoUrl: string;
  content: string;
  id: string;
}

export interface Staff {
  name: string;
  about: string;
  photoUrl: string;
  userSector: string;
  title: string;
  id: string;
}

export interface Alumni {
  name: string;
  story: string;
  photoUrl: string;
  id: string;
}
