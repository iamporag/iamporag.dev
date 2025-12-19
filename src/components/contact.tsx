import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const serviceID = "service_4fvd2sk";
      const templateID = "template_qi5tc3p";
      const publicKey = "i2O9txibTIuuZf6pg";

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white font-semibold rounded-full py-3 hover:bg-blue-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="mt-4 text-center text-green-600">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
