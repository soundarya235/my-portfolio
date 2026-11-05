import { useState } from "react";
import { motion } from "framer-motion";

const MY_PHONE = "+91XXXXXXXXXX"; // ✏️ unga real number

const inputClass =
  "w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(form));
    data.access_key = import.meta.env.VITE_WEB3FORMS_KEY;
    data.subject = `Hire request from ${data.name}${data.company ? ` (${data.company})` : ""}`;
    data.from_name = "Portfolio Website";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5"
      >
        <h2 className="text-4xl font-bold text-center mb-2 text-blue-400">Get In Touch</h2>
        
        {status === "success" ? (
          <div className="text-center py-8">
            <p className="text-2xl font-semibold text-green-400">Thank you! 🎉</p>
            <p className="mt-2 text-slate-300">received your message</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* spam honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" name="name" placeholder="Your Name *" required className={inputClass} />
              <input type="text" name="company" placeholder="Company" className={inputClass} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input type="email" name="email" placeholder="Your Email *" required className={inputClass} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (with country code) *"
                required
                pattern="[+0-9\s\-]{10,16}"
                title="Please give a Valid Phone number"
                className={inputClass}
              />
            </div>

            <select name="best_time_to_call" defaultValue="Anytime" className={inputClass}>
              <option className="text-black">Anytime</option>
              <option className="text-black">Morning (9 AM - 12 PM)</option>
              <option className="text-black">Afternoon (12 PM - 4 PM)</option>
              <option className="text-black">Evening (4 PM - 7 PM)</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Role / opportunity details *"
              required
              className={inputClass}
            ></textarea>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Not send : {errorMsg}. Try Again 
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-lg font-bold transition duration-300"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <p className="text-center text-sm text-slate-400">
              Otherwise Directly:{" "}
              <a href={`tel:${MY_PHONE}`} className="text-blue-400 hover:underline">Call me</a>
              {" · "}
              <a
                href={`https://wa.me/${MY_PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}