import { useState } from "react";
import ArrowUpRightIcon from "../../public/assets/icons/arrow-up-right.svg";
import grainImage from "../../public/assets/images/grain.jpg";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataObj = new FormData(event.target);

    formDataObj.append("access_key", "4c249a78-0c5f-49cf-b977-9250a44a6137");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Reset the form after successful submission
        setFormData({
          name: "",
          age: "",
          gender: "",
          location: "",
          message: "",
        });
        setShowForm(false);
      } else {
        console.error("Error:", res.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  // Open form
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Close form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-10">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button
                onClick={handleButtonClick}
                className="cursor-pointer text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800"
              >
                <span className="font-semibold">Contact me</span>
                <img
                  src={ArrowUpRightIcon}
                  className="size-4"
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-8 w-[90%] max-w-md">
              <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="border p-2 rounded-lg w-full text-black"
                  required
                />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Your Age"
                  className="border p-2 rounded-lg w-full text-black"
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full text-black"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your Location"
                  className="border p-2 rounded-lg w-full text-black"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="border p-2 rounded-lg w-full text-black"
                  rows="4"
                  required
                ></textarea>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
