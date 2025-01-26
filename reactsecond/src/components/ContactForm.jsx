import  { useState } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    communicationMethod: "Email",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          communicationMethod: "Email",
          message: "",
        });
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="contact" className="font-sans">
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {/* Left Section */}
            <div className="lg:mb-0 mb-8">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-xl rounded-xl"
                  />
                  <h1 className="font-manrope text-white text-2xl font-bold absolute top-8 left-8">
                    Contact Me
                  </h1>
                  <div className="absolute bottom-0 w-full p-4">
                    <div className="bg-white rounded-lg p-4">
                      <a href="tel:+916302505454" className="flex items-center mb-4">
                        {/* Phone Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                        <h5 className="text-black text-sm ml-3">+91 6302505454</h5>
                      </a>
                      <a href="mailto:n200957@rguktn.ac.in" className="flex items-center mb-4">
                        {/* Email Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                        <h5 className="text-black text-sm ml-3">
                          n200957@rguktn.ac.in
                        </h5>
                      </a>
                      <a href="#" className="flex items-center">
                        {/* Location Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                        <h5 className="text-black text-sm ml-3">
                          RGUKT Nuzvid, Eluru
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gray-50 p-4 lg:p-6 lg:rounded-r-xl rounded-xl">
              <h2 className="text-indigo-600 font-manrope text-2xl font-semibold mb-6">
                Send Us A Message
              </h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-sm rounded-lg border border-gray-200 focus:outline-none pl-3 mb-6"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-sm rounded-lg border border-gray-200 focus:outline-none pl-3 mb-6"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-sm rounded-lg border border-gray-200 focus:outline-none pl-3 mb-6"
                placeholder="Phone"
              />
              <div className="mb-6">
                <h4 className="text-gray-500 text-sm mb-3">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-6">
                    <input
                      type="radio"
                      name="communicationMethod"
                      value="Email"
                      checked={formData.communicationMethod === "Email"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label className="flex items-center cursor-pointer text-gray-500 text-sm">
                      <span className="border border-gray-300 rounded-full mr-2 w-3 h-3"></span>
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="communicationMethod"
                      value="Phone"
                      checked={formData.communicationMethod === "Phone"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label className="flex items-center cursor-pointer text-gray-500 text-sm">
                      <span className="border border-gray-300 rounded-full mr-2 w-3 h-3"></span>
                      Phone
                    </label>
                  </div>
                </div>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-24 text-gray-600 placeholder-gray-400 bg-transparent text-sm rounded-lg border border-gray-200 focus:outline-none pl-3 mb-6"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full h-10 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-500 bg-cyan-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
