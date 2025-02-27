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

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Send form data to the backend API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Handle success
        console.log(result.message);
        alert("Thank you for your message! We'll get in touch soon.");
      } else {
        // Handle errors
        console.error(result.message);
        alert("There was an issue with your submission. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("There was an error. Please try again later.");
    }
  
    // Reset the form
    setFormData({
      name: "",
      age: "",
      gender: "",
      location: "",
      message: "",
    });
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
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
