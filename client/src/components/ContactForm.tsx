
const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border rounded-md p-4"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="border rounded-md p-4"
        placeholder="Email"
        required
      />
      <textarea
        className="border rounded-md p-4"
        rows={4}
        placeholder="message"
      />
      <button className="bg-[#00B1F4] rounded-md p-[10px] text-white text-xl font-bold mt-2">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
