import React from "react";
import { useFormContext } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useDropzone } from "react-dropzone";

interface ProjectCoverPhotoInputProps {
  id: string;
}

const ProjectCoverPhotoInput: React.FC<ProjectCoverPhotoInputProps> = ({
  id,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  // State to store uploaded image file
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  // Function to handle file drop
  const onDrop = (acceptedFiles: File[]) => {
    // Set the uploaded image file
    setImageFile(acceptedFiles[0]);
    // Update the form field value
    setValue("imageFile", acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Allow only one file to be selected
    accept: {},
  });

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Cover photo
      </label>
      <div
        {...getRootProps()}
        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer"
      >
        <input
          {...getInputProps()}
          accept="image/*"
          className="sr-only"
          {...register("imageFile", { required: true })}
        />
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          {imageFile ? (
            <p className="mt-2 text-green-600">
              Image selected: {imageFile.name}
            </p>
          ) : (
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <span>Upload a file</span>
              <p className="pl-1">or drag and drop</p>
            </div>
          )}
        </div>
      </div>
      {errors.imageFile?.type === "required" && (
        <p className="text-red-500" role="alert">
          Image is required
        </p>
      )}
    </div>
  );
};

export default ProjectCoverPhotoInput;
