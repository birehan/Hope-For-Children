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
export interface CommonProjectFields {
  title: string;
  description: string;
  content: string;
}

export interface Project extends CommonProjectFields {
  photoUrl: string;
  id: string;
}

export interface CreateProject extends CommonProjectFields {
  imageFile: File;
}

export interface UpdateProject extends CommonProjectFields {
  imageFile?: File;
  id: string;
}

export interface CommonStaffFields {
  name: string;
  about: string;
  userSector: string;
  title: string;
}

export interface CreateStaff extends CommonStaffFields {
  file: File;
}
export interface UpdateStaff extends CommonStaffFields {
  file: File | null;
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

export interface CommonAlumniFields {
  name: string;
  story: string;
}

export interface CreateAlumni extends CommonAlumniFields {
  file: File;
}

export interface UpdateAlumni extends CommonAlumniFields {
  file: File | null;
  id: string;
}

export interface Alumni {
  name: string;
  story: string;
  photoUrl: string;
  id: string;
}

export interface Gallery {
  title: string;
  mainPhotoUrl: string;
  id: string;
}

export interface GalleryDetail {
  title: string;
  mainPhotoUrl: string;
  photos: string[];
  id: string;
}
