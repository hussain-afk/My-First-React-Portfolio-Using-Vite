import React, { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Terminal,
  MapPin,
  Globe,
} from "lucide-react";
import { ThemeContext } from "../components/themeContext/context";

export default function Contact() {
  const [state, handleSubmit] = useForm("xdajopll");
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  if (state.succeeded) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center animate-fadeIn">
        <div
          className={`border rounded-2xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden ${
            isDark
              ? "bg-[#161b22] border-[#30363d]"
              : "bg-white border-gray-300"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
          </div>

          <div className="space-y-2">
            <h3
              className={`text-2xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-gray-950"
              }`}
            >
              Transmission Received
            </h3>

            <p
              className={`text-sm font-light leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Thank you for reaching out! Your message has been routed
              successfully. I will get back to you shortly.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className={`text-xs font-mono uppercase tracking-widest border text-[#58a6ff] hover:border-[#58a6ff]/40 px-5 py-2.5 rounded-xl transition-all ${
                isDark
                  ? "bg-[#0d1117] border-[#30363d]"
                  : "bg-gray-100 border-gray-300"
              }`}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-6 animate-fadeIn">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#58a6ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#58a6ff]">
          Get In Touch
        </span>

        <h2
          className={`text-3xl sm:text-4xl font-black italic uppercase tracking-tight mt-1 ${
            isDark ? "text-white" : "text-gray-950"
          }`}
        >
          Contact{" "}
          <span className="text-[#58a6ff] not-italic tracking-normal normal-case drop-shadow-[0_0_15px_rgba(88,166,255,0.15)]">
            Me
          </span>
        </h2>

        <div className="h-[3px] w-20 bg-gradient-to-r from-[#58a6ff] to-transparent mt-3 rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl">
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`border backdrop-blur-sm p-6 rounded-2xl space-y-6 ${
              isDark
                ? "bg-[#161b22]/50 border-[#30363d]/60"
                : "bg-white border-gray-300"
            }`}
          >
            <div
              className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest pb-2 border-b ${
                isDark
                  ? "text-gray-400 border-[#30363d]/40"
                  : "text-gray-600 border-gray-300"
              }`}
            >
              <Terminal className="text-[#58a6ff] w-4 h-4" />
              <span>// Routing Channels</span>
            </div>

            <div className="flex items-start gap-4 group">
              <div
                className={`w-10 h-10 rounded-xl border text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 flex items-center justify-center transition-colors duration-300 shrink-0 ${
                  isDark
                    ? "bg-[#0d1117] border-[#30363d]"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <Mail className="w-4 h-4" />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500">
                  Email Address
                </h4>

                <a
                  href="mailto:hussainkadirmemon245@gmail.com"
                  className={`text-sm hover:text-[#58a6ff] transition-colors font-medium break-all ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  hussainkadirmemon245@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div
                className={`w-10 h-10 rounded-xl border text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 flex items-center justify-center transition-colors duration-300 shrink-0 ${
                  isDark
                    ? "bg-[#0d1117] border-[#30363d]"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <MapPin className="w-4 h-4" />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500">
                  Location Base
                </h4>

                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div
                className={`w-10 h-10 rounded-xl border text-gray-500 group-hover:text-[#58a6ff] group-hover:border-[#58a6ff]/20 flex items-center justify-center transition-colors duration-300 shrink-0 ${
                  isDark
                    ? "bg-[#0d1117] border-[#30363d]"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <Globe className="w-4 h-4" />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500">
                  Work Status
                </h4>

                <div className="flex items-center gap-2 pt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_#22c55e]" />

                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Available for Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            className={`border rounded-2xl overflow-hidden shadow-xl relative ${
              isDark
                ? "bg-[#161b22] border-[#30363d]"
                : "bg-white border-gray-300"
            }`}
          >
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                isDark
                  ? "border-[#30363d]/70 bg-[#0d1117]/50"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isDark ? "bg-[#30363d]" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isDark ? "bg-[#30363d]" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isDark ? "bg-[#30363d]" : "bg-gray-300"
                  }`}
                />
              </div>

              <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                secure_mailer.exe
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={`block text-xs font-mono uppercase tracking-widest font-bold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Email Address
                </label>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 pointer-events-none">
                    <Mail className="w-4 h-4" />
                  </span>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className={`w-full border focus:border-[#58a6ff]/50 rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-all duration-200 ${
                      isDark
                        ? "bg-[#0d1117] border-[#30363d] text-white placeholder-gray-600"
                        : "bg-gray-100 border-gray-300 text-gray-950 placeholder-gray-500"
                    }`}
                  />
                </div>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-400 font-mono"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={`block text-xs font-mono uppercase tracking-widest font-bold ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Message Content
                </label>

                <div className="relative">
                  <span className="absolute top-3.5 left-0 pl-4 flex items-start text-gray-500 pointer-events-none">
                    <MessageSquare className="w-4 h-4" />
                  </span>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Type your transmission detail here..."
                    className={`w-full border focus:border-[#58a6ff]/50 rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-all duration-200 resize-none ${
                      isDark
                        ? "bg-[#0d1117] border-[#30363d] text-white placeholder-gray-600"
                        : "bg-gray-100 border-gray-300 text-gray-950 placeholder-gray-500"
                    }`}
                  />
                </div>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-400 font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#58a6ff] text-[#0d1117] font-mono text-xs uppercase font-extrabold tracking-widest rounded-xl transition-all duration-300 hover:bg-[#58a6ff]/90 hover:shadow-[0_0_20px_rgba(88,166,255,0.3)] disabled:opacity-40 disabled:pointer-events-none active:scale-98"
                >
                  <span>{state.submitting ? "Routing..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}