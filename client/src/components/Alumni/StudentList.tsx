import Image from "next/image";
import student from "../../../common/images/student.jpg";

const StudentList = () => {
  return (
    <div className="py-5 md:py-32">
      <div className="studentList max-w-[1000px] m-auto p-5 flex flex-col md:flex-row  gap-6 mb-10  md:mb-[8rem]">
        <div className="p-5 md:ml-10 md:mt-[-6rem] bg-white">
          <Image
            className="w-full md:w-[20vw] h-[45vh] md:h-[35vh] rounded-md"
            src={student}
            alt="student"
          />
        </div>
        <div className="w-[100%]">
          <h1 className="text-center font-bold mb-2">Temesgen Mekonen</h1>
          <p>
            a highly motivated individual who has consistently achieved
            excellence in her academic pursuits. Her commitment and hard work
            have been recognized by the prestigious New Globe College, where she
            has been awarded a medal for her outstanding achievements. Her
            success is a testament to her dedication and willingness to go the
            extra mile in all her endeavors. She possesses excellent leadership
            qualities and is a source of inspiration for her peers. Her
            achievements thus far have set her on a path towards continued
            success, and there is no doubt that she will achieve great things in
            the future.
          </p>
        </div>
      </div>

      <div className="studentList max-w-[1000px] m-auto p-5 flex flex-col md:flex-row  gap-6 mb-10 md:mb-[8rem]">
        <div className="p-5 md:ml-10 md:mt-[-6rem] bg-white">
          <Image
            className="w-full md:w-[20vw] h-[45vh] md:h-[35vh] rounded-md"
            src={student}
            alt="student"
          />
        </div>
        <div className="w-[100%]">
          <h1 className="text-center font-bold mb-2">Temesgen Mekonen</h1>
          <p>
            a highly motivated individual who has consistently achieved
            excellence in her academic pursuits. Her commitment and hard work
            have been recognized by the prestigious New Globe College, where she
            has been awarded a medal for her outstanding achievements. Her
            success is a testament to her dedication and willingness to go the
            extra mile in all her endeavors. She possesses excellent leadership
            qualities and is a source of inspiration for her peers. Her
            achievements thus far have set her on a path towards continued
            success, and there is no doubt that she will achieve great things in
            the future.
          </p>
        </div>
      </div>
      <div className="studentList max-w-[1000px] m-auto p-5 flex flex-col md:flex-row  gap-6 mb-10 md:mb-[8rem]">
        <div className="p-5 md:ml-10 md:mt-[-6rem] bg-white">
          <Image
            className="w-full md:w-[20vw] h-[45vh] md:h-[35vh] rounded-md"
            src={student}
            alt="student"
          />
        </div>
        <div className="w-[100%]">
          <h1 className="text-center font-bold mb-2">Temesgen Mekonen</h1>
          <p>
            a highly motivated individual who has consistently achieved
            excellence in her academic pursuits. Her commitment and hard work
            have been recognized by the prestigious New Globe College, where she
            has been awarded a medal for her outstanding achievements. Her
            success is a testament to her dedication and willingness to go the
            extra mile in all her endeavors. She possesses excellent leadership
            qualities and is a source of inspiration for her peers. Her
            achievements thus far have set her on a path towards continued
            success, and there is no doubt that she will achieve great things in
            the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
