import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { Github, Linkedin } from "../components/ui/Icons";

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

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS variables are missing in .env file.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      // It's best to use the form object directly with the public key
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        contactForm.current,
        { publicKey: publicKey }
      );

      if (result.status === 200) {
        setSuccess(true);
        contactForm.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(err?.text || "Failed to send message. Check your EmailJS configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-primary">
            <Mail size={16} />
            Let's Connect
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Start a <span className="text-gradient">Conversation</span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <ContactInfo
                icon={Mail}
                title="Email"
                value="ahamed.ajaj01@gmail.com"
                link="mailto:ahamed.ajaj01@gmail.com"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                value="+977-9821841560"
                link="tel:+9779821841560"
              />
              <ContactInfo
                icon={MapPin}
                title="Location"
                value="Kathmandu, Nepal"
              />
            </div>

            <div className="glass rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 text-accent transition-colors">
                <CheckCircle2 size={24} />
                <span className="text-xl font-black tracking-tight dark:text-white">Available for Work</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                I'm currently looking for new opportunities as a <span className="text-primary font-bold">Full-Stack / Backend Developer</span>. Let's build something exceptional together.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <SocialLink icon={Github} href="https://github.com/ahamedajaj01" />
                <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/ajaj-ahamed-thakurai/" />
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            ref={contactForm}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-8 md:p-12 space-y-8 relative overflow-hidden"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <FormField label="Full Name" name="name" placeholder="John Doe" required />
              <FormField label="Email Address" name="email" type="email" placeholder="john@example.com" required />
            </div>

            <FormField label="Subject" name="subject" placeholder="Project Inquiry" required />
            <FormField label="Message" name="message" isTextArea placeholder="Tell me about your vision..." required />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group overflow-hidden rounded-2xl bg-primary px-8 py-5 text-lg font-black text-white shadow-xl shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending Magic...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-primary-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 text-accent border border-accent/20"
                >
                  <CheckCircle2 size={20} />
                  <span className="font-bold">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20"
                >
                  <AlertCircle size={20} />
                  <span className="font-bold">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, value, link }) {
  const Card = (
    <div className="glass rounded-2xl p-6 flex items-start gap-6 hover:border-primary/30 transition-all group">
      <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{title}</h4>
        <p className="text-xl font-black text-slate-800 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link} className="block">{Card}</a> : Card;
}

function SocialLink({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-2xl glass text-slate-500 hover:text-primary transition-colors hover:shadow-lg"
    >
      <Icon size={24} />
    </motion.a>
  );
}

function FormField({ label, name, isTextArea, ...props }) {
  const Component = isTextArea ? "textarea" : "input";
  return (
    <div className="space-y-3">
      <label className="text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{label}</label>
      <Component
        name={name}
        {...props}
        rows={isTextArea ? 5 : undefined}
        className="w-full rounded-2xl glass bg-white/50 dark:bg-slate-900/50 px-6 py-4 text-slate-900 dark:text-white outline-hidden focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none font-medium placeholder:text-slate-400"
      />
    </div>
  );
}

