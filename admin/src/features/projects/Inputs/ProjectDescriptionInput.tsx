import React from "react";
import { useFormContext } from "react-hook-form";

interface ProjectDescriptionInputProps {
  id: string;
}

const ProjectDescriptionInput: React.FC<ProjectDescriptionInputProps> = ({
  id,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Introduction
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register("description", {
            required: true,
          })}
        />

        {errors.description?.type === "required" && (
          <p className="text-red-500" role="alert">
            Description is required
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDescriptionInput;
