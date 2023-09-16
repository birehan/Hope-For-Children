// import { PhotoIcon } from "@heroicons/react/24/solid";
// import { useDispatch } from "react-redux";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { CreateProject } from "../../types/types";
// import { CreateProjectAction } from "../redux/project/projectSlice";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

// const CreateProjectForm = () => {
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     control,
//     formState: { errors },
//   } = useForm<CreateProject>();
//   const onSubmit: SubmitHandler<CreateProject> = (data) => {
//     // const formData = new FormData();
//     // formData.append("title", data.title);
//     // formData.append("description", data.description);
//     // formData.append("content", data.content);
//     // formData.append("imageFile", data.imageFile);
//     // dispatch(CreateProjectAction(formData));

//     console.log("data: ", data);
//   };

//   // State to store uploaded image file
//   const [imageFile, setImageFile] = useState<File | null>(null);

//   // Function to handle file drop
//   const onDrop = (acceptedFiles: File[]) => {
//     // Set the uploaded image file
//     setImageFile(acceptedFiles[0]);
//     // Update the form field value
//     setValue("imageFile", acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     multiple: false, // Allow only one file to be selected
//     accept: {
//       "image/png": [".png"],
//     },
//   });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex flex-col gap-4 w-full max-w-[60rem] mx-auto p-6">
//         <h1 className="text-center text-4xl text-primaryColor font-[500]">
//           Create Project
//         </h1>
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium leading-6 text-gray-900"
//           >
//             Project Title
//           </label>
//           <div className="mt-2">
//             <input
//               id="title"
//               type="title"
//               {...register("title", {
//                 required: true,
//               })}
//               className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />

//             {errors.title?.type === "required" && (
//               <p className="text-red-500" role="alert">
//                 title is required
//               </p>
//             )}
//           </div>
//         </div>

//         <div>
//           <label
//             htmlFor="comment"
//             className="block text-sm font-medium leading-6 text-gray-900"
//           >
//             Introduction
//           </label>
//           <div className="mt-2">
//             <textarea
//               rows={4}
//               id="description"
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               {...register("description", { required: true })}
//             />
//             {errors.description?.type === "required" && (
//               <p className="text-red-500" role="alert">
//                 description is required
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="col-span-full">
//           <label
//             htmlFor="cover-photo"
//             className="block text-sm font-medium leading-6 text-gray-900"
//           >
//             Cover photo
//           </label>
//           <div
//             {...getRootProps()}
//             className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer"
//           >
//             <input {...getInputProps()} accept="image/*" className="sr-only" />
//             <div className="text-center">
//               <PhotoIcon
//                 className="mx-auto h-12 w-12 text-gray-300"
//                 aria-hidden="true"
//               />
//               {imageFile ? (
//                 <p className="mt-2 text-green-600">
//                   Image selected: {imageFile.name}
//                 </p>
//               ) : (
//                 <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                   <span>Upload a file</span>
//                   <p className="pl-1">or drag and drop</p>
//                 </div>
//               )}
//             </div>
//           </div>
//           {errors.imageFile?.type === "required" && (
//             <p className="text-red-500" role="alert">
//               Image is required
//             </p>
//           )}
//         </div>

//         <div>
//           <label
//             htmlFor="content"
//             className="block text-sm font-medium leading-6 text-gray-900"
//           >
//             Content
//           </label>
//           <div className="mt-2">
//             <Controller
//               name="content"
//               control={control} // Pass the form control
//               defaultValue={""} // Set the initial value to an empty string
//               rules={{ required: true }} // Add required rule
//               render={({ field }) => (
//                 <>
//                   <CKEditor
//                     editor={ClassicEditor}
//                     data={field.value}
//                     onChange={(event, editor) => {
//                       const data = editor.getData();
//                       field.onChange(data); // Update the form field value
//                     }}
//                   />
//                 </>
//               )}
//             />
//             {errors.content?.type === "required" && (
//               <p className="text-red-500" role="alert">
//                 Content is required
//               </p>
//             )}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="xl:mr-12 inline-flex justify-center items-center  gap-x-1.5 rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColorHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorHover"
//         >
//           Create Project
//         </button>
//       </div>
//     </form>
//   );
// };

// export default CreateProjectForm;

import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
import ProjectTitleInput from "./Inputs/ProjectTitleInput";
import ProjectCoverPhotoInput from "./Inputs/ProjectCoverPhotoInput";
import ProjectDescriptionInput from "./Inputs/ProjectDescriptionInput";
import ProjectContentInput from "./Inputs/ProjectContentInput";

interface CreateProject {
  title: string;
  description: string;
  imageFile: File;
  content: string;
}

const CreateProjectForm = () => {
  const methods = useForm<CreateProject>();

  const onSubmit: SubmitHandler<CreateProject> = (data) => {
    // You can access the form data using data
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 w-full max-w-[60rem] mx-auto p-6">
          <h1 className="text-center text-4xl text-primaryColor font-[500]">
            Create Project
          </h1>
          <ProjectTitleInput id="title" />
          <ProjectDescriptionInput id="description" />
          <ProjectCoverPhotoInput id="cover-photo" />
          <ProjectContentInput name="content" />

          <button
            type="submit"
            className="xl:mr-12 inline-flex justify-center items-center gap-x-1.5 rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColorHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorHover"
          >
            Create Project
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateProjectForm;
