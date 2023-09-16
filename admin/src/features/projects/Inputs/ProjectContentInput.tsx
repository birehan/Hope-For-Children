import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface ProjectContentInputProps {
  name: string;
}

const ProjectContentInput: React.FC<ProjectContentInputProps> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Content
      </label>
      <div className="mt-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <CKEditor
                editor={ClassicEditor}
                data={field.value}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  field.onChange(data);
                }}
              />
            </>
          )}
        />
        {errors[name]?.type === "required" && (
          <p className="text-red-500" role="alert">
            Content is required
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectContentInput;
