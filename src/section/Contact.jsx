import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const templateId = import.meta.env.VITE_META_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_META_SERVICE_ID;
const publicKey = import.meta.env.VITE_META_PUBLIC_KEY;

export default function Contact() {
  const contactForm = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!contactForm.current) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        contactForm.current,
        publicKey
      );

      setSuccess(true);
      contactForm.current.reset();
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        py-32
        bg-white text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            ✦ Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold">Let’s Work Together</h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Ready to bring your ideas to life? I’m here to help you build
            something amazing.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Contact cards */}
            <ContactCard
              title="Email"
              value="ahamed.ajaj01@gmail.com"
              subtitle="Send me an email anytime"
              icon="✉️"
            />

            <ContactCard
              title="Phone"
              value="+977- 9821841560"
              subtitle="Available for calls"
              icon="📞"
            />

            <ContactCard
              title="Location"
              value="Kathmandu, Nepal"
              subtitle="Open to remote opportunities"
              icon="📍"
            />

            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Follow Me
              </h4>

              <div className="mt-4 flex gap-3">
                <SocialButton
                  label="Github"
                  href="https://github.com/ahamedajaj01"
                />
                <SocialButton
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/ajaj-ahamed-thakurai/"
                />
              </div>
            </div>

            {/* Availability */}
            <div
              className="
              rounded-xl border border-slate-200 dark:border-slate-800
              bg-slate-50 dark:bg-slate-900/40
              p-5
            "
            >
              <div className="flex items-center gap-2 text-green-500">
                ● <span className="font-medium">Available for work</span>
              </div>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                I’m currently accepting new projects and would love to hear
                about yours.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN – FORM */}
          <form
            ref={contactForm}
            onSubmit={sendEmail}
            className="
              rounded-2xl border border-slate-200 dark:border-slate-800
              bg-white dark:bg-slate-900/40
              p-8
              space-y-6
            "
          >
            <h3 className="text-xl font-semibold">Send me a message</h3>

            {/* Name + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Full Name *"
                name="name"
                placeholder="Your full name"
              />
              <Input
                label="Email Address *"
                placeholder="your@email.com"
                type="email"
                name="email"
              />
            </div>

            <Input
              label="Subject"
              placeholder="What’s this about?"
              name="subject"
            />

            <Textarea
              label="Message *"
              name="message"
              placeholder="Tell me about your project, ideas, or just say hello…"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-2
                rounded-xl bg-violet-600 px-6 py-3
                font-medium text-white
                hover:bg-violet-500
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {/* Feedback */}
            {success && (
              <p className="text-sm text-green-500">
                ✅ Message sent successfully! I’ll get back to you soon.
              </p>
            )}

            {error && <p className="text-sm text-red-500">❌ {error}</p>}

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2 text-green-500">
                ✔ Usually responds within 24 hours
              </span>
              <span className="flex items-center gap-2 text-green-500">
                ✔ Free consultation available
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub-components ---------- */

function ContactCard({ icon, title, value, subtitle }) {
  return (
    <div
      className="
        flex gap-4 rounded-xl
        border border-slate-200 dark:border-slate-800
        bg-slate-50 dark:bg-slate-900/40
        p-5
      "
    >
      <div className="text-violet-500 text-xl">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{value}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="
          mt-2 w-full rounded-lg
          border border-slate-300 dark:border-slate-700
          bg-transparent px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-violet-500
        "
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <textarea
        {...props}
        rows={5}
        className="
          mt-2 w-full rounded-lg
          border border-slate-300 dark:border-slate-700
          bg-transparent px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-violet-500
        "
      />
    </div>
  );
}

function SocialButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        h-10 w-10
        flex items-center justify-center
        rounded-lg
        border border-slate-300 dark:border-slate-700
        text-slate-600 dark:text-slate-300
        hover:bg-slate-100 dark:hover:bg-slate-800
        transition
      "
    >
      {label === "Github" && "G"}
      {label === "LinkedIn" && "in"}
    </a>
  );
}
