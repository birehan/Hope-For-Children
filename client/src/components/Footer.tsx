import {
  Facebook,
  FacebookRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-[#F7F8FC80] footer">
      <div className="px-5 pt-14 pb-5 flex-wrap md:flex-nowrap flex justify-between max-w-[95%] md:w-[90%] lg:w-[85%] m-auto">
        <div>
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Hope For Children
          </h1>
          <p className="my-2">Children Grow in a happy</p>
          <p className="my-2">and healthy environment</p>
          <div className="flex items-center mt-3">
            <button className="w-10 h-10 border rounded-[50%] left-441 top-5904 bg-[#FFFFFF] shadow-md">
              <FacebookRounded />
            </button>
            <button className="w-12 h-12 border mx-3 rounded-[50%] left-441 top-5904 bg-blue-500 shadow-md">
              <Instagram className="text-white" />
            </button>
            <button className="w-10 h-10 border rounded-[50%] left-441 top-5904 bg-[#FFFFFF]  shadow-md">
            <Twitter />
            </button>
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Company
          </h1>
          <ul className="mt-2">
            <li className="my-2">About</li>
            <li className="my-2">Projects</li>
            <li className="my-2">Program</li>
            <li className="my-2">Donate</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Contact
          </h1>
          <p className="my-2" >Phone : +2519857474748</p>
          <p className="my-2">P O X Number : 250</p>
          <p className="my-2">Email : hopeforchildren12@gmail.com</p>
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[85%] px-5 m-auto">
      <hr className="border border-gray-400 border-opacity-50"/>
        <div className="flex justify-between my-4">
          <p>@ Hope For Children all rights reserved</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
