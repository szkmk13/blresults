"use client";

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const STEPS = [
  {
    id: "goal",
    number: "01",
    question: "Jaki jest Twój główny cel treningowy na najbliższe 3 miesiące?",
    options: [
      { value: "sila", label: "Zwiększenie siły maksymalnej" },
      { value: "technika", label: "Poprawa techniki ćwiczeń" },
      { value: "masa", label: "Zwiększenie masy mięśniowej" },
      { value: "redukcja", label: "Redukcja tkanki tłuszczowej" },
      { value: "sprawnosc", label: "Powrót do sprawności / pozbycie się bólu" },
    ],
  },
  {
    id: "support",
    number: "02",
    question: "Jakiej formy wsparcia oczekujesz?",
    options: [
      { value: "1on1", label: "Treningi personalne 1/1" },
      { value: "para", label: "Treningi w parze" },
      { value: "online", label: "Współpraca hybrydowa / online" },
      { value: "konsultacja", label: "Jednorazowe konsultacje" },
    ],
  },
  {
    id: "obstacle",
    number: "03",
    question: "Co do tej pory utrudniało Ci osiągnięcie rezultatów?",
    options: [
      { value: "motywacja", label: "Brak systematyczności i motywacji" },
      { value: "plan", label: "Brak konkretnego planu działania" },
      { value: "kontuzja", label: "Lęk przed kontuzją / słaba technika" },
      { value: "efekty", label: "Brak widocznych efektów mimo ćwiczeń" },
    ],
  },
  {
    id: "frequency",
    number: "04",
    question: "Ile razy w tygodniu jesteś w stanie trenować, aby osiągnąć swój cel?",
    options: [
      { value: "1", label: "1 raz" },
      { value: "2", label: "2 razy" },
      { value: "3+", label: "3 lub więcej" },
    ],
  },
];

type Answers = {
  goal: string;
  support: string;
  obstacle: string;
  frequency: string;
  name: string;
  phone: string;
  email: string;
};

type AnimClass = "enter-right" | "enter-left" | "exit-left" | "exit-right" | "idle";

const ANIM_DURATION = 320;

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [animClass, setAnimClass] = useState<AnimClass>("idle");
  const [isAnimating, setIsAnimating] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    goal: "",
    support: "",
    obstacle: "",
    frequency: "",
    name: "",
    phone: "",
    email: "",
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const totalSteps = STEPS.length + 1;
  const isQuestionStep = step < STEPS.length;
  const currentStep = isQuestionStep ? STEPS[step] : null;
  const currentAnswer = isQuestionStep ? answers[currentStep!.id as keyof Answers] : "";

  function navigate(nextStep: number, direction: "forward" | "back") {
    if (isAnimating) return;
    setIsAnimating(true);
    const exitClass: AnimClass = direction === "forward" ? "exit-left" : "exit-right";
    const enterClass: AnimClass = direction === "forward" ? "enter-right" : "enter-left";

    setAnimClass(exitClass);
    setTimeout(() => {
      setStep(nextStep);
      setAnimClass(enterClass);
      setTimeout(() => {
        setAnimClass("idle");
        setIsAnimating(false);
      }, ANIM_DURATION);
    }, ANIM_DURATION);
  }

  function selectOption(value: string) {
    const key = STEPS[step].id as keyof Answers;
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => navigate(step + 1, "forward"), 150);
  }

  function goBack() {
    navigate(step - 1, "back");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!answers.phone.trim()) {
      setErrorMsg("Numer telefonu jest wymagany.");
      return;
    }
    if (!turnstileToken) {
      setErrorMsg("Poczekaj na weryfikację CAPTCHA.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, turnstileToken }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Błąd serwera.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Coś poszło nie tak. Spróbuj ponownie.");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  const animStyle: React.CSSProperties = (() => {
    switch (animClass) {
      case "enter-right":
        return { animation: `slideInRight ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) both` };
      case "enter-left":
        return { animation: `slideInLeft ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) both` };
      case "exit-left":
        return { animation: `slideOutLeft ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) both` };
      case "exit-right":
        return { animation: `slideOutRight ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) both` };
      default:
        return {};
    }
  })();

  return (
    <section
      id="form"
      className="pt-12 pb-24 md:pt-16 md:pb-32"
      style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <style>{`
        @keyframes slideInRight  { from { opacity:0; transform:translateX(48px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideInLeft   { from { opacity:0; transform:translateX(-48px) } to { opacity:1; transform:translateX(0) } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(-48px) } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(48px) } }
      `}</style>

      <div className="max-w-2xl mx-auto px-6">
        <p
          className="text-[10px] font-medium tracking-[0.4em] uppercase mb-16"
          style={{ color: "var(--text-faint)" }}
        >
          06 - Formularz kontaktowy
        </p>

        {status === "success" ? (
          <div className="text-center py-16" style={{ animation: `slideInRight ${ANIM_DURATION}ms cubic-bezier(0.22,1,0.36,1) both` }}>
            <p className="text-3xl font-black mb-4" style={{ color: "var(--text)" }}>
              Gotowe!
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Odezwę się do Ciebie w ciągu 24h.
            </p>
          </div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="flex gap-1 mb-12">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 flex-1 transition-all duration-500"
                  style={{ backgroundColor: i <= step ? "var(--accent)" : "var(--border)" }}
                />
              ))}
            </div>

            {/* Animated step content */}
            <div style={{ overflow: "hidden" }}>
              <div style={animStyle}>
                {isQuestionStep && currentStep && (
                  <div>
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase mb-4"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {currentStep.number} / 04
                    </p>
                    <h2
                      className="text-2xl md:text-3xl font-black mb-10 leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      {currentStep.question}
                    </h2>
                    <div className="flex flex-col gap-2">
                      {currentStep.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => selectOption(opt.value)}
                          disabled={isAnimating}
                          className="text-left px-6 py-4 text-sm font-medium transition-all duration-150"
                          style={{
                            border: `1px solid ${currentAnswer === opt.value ? "var(--accent)" : "var(--border)"}`,
                            backgroundColor: currentAnswer === opt.value ? "var(--accent)" : "var(--bg-card)",
                            color: currentAnswer === opt.value ? "var(--accent-text)" : "var(--text)",
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!isQuestionStep && (
                  <form onSubmit={handleSubmit}>
                    <h2
                      className="text-2xl md:text-3xl font-black mb-3 leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      Świetnie! Wygląda na to, że mogę Ci pomóc.
                    </h2>
                    <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
                      Zostaw swoje dane, a oddzwonię do Ciebie w ciągu 24h, by porozmawiać krótko o Twoich celach.
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                      <div>
                        <label
                          className="block text-[10px] tracking-[0.3em] uppercase mb-2"
                          style={{ color: "var(--text-faint)" }}
                        >
                          Imię
                        </label>
                        <input
                          type="text"
                          value={answers.name}
                          onChange={(e) => setAnswers((p) => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 text-sm outline-none"
                          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                          placeholder="Twoje imię"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[10px] tracking-[0.3em] uppercase mb-2"
                          style={{ color: "var(--text-faint)" }}
                        >
                          Numer telefonu <span style={{ color: "var(--accent)" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          value={answers.phone}
                          onChange={(e) => setAnswers((p) => ({ ...p, phone: e.target.value }))}
                          required
                          className="w-full px-4 py-3 text-sm outline-none"
                          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                          placeholder="+48 000 000 000"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[10px] tracking-[0.3em] uppercase mb-2"
                          style={{ color: "var(--text-faint)" }}
                        >
                          Adres e-mail{" "}
                          <span className="normal-case tracking-normal" style={{ color: "var(--text-faint)" }}>
                            (opcjonalnie)
                          </span>
                        </label>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(e) => setAnswers((p) => ({ ...p, email: e.target.value }))}
                          className="w-full px-4 py-3 text-sm outline-none"
                          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
                          placeholder="twoj@email.pl"
                        />
                      </div>
                    </div>

                    {siteKey && (
                      <div className="mb-6 overflow-x-auto">
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={siteKey}
                          onSuccess={(token) => setTurnstileToken(token)}
                          onExpire={() => setTurnstileToken(null)}
                        />
                      </div>
                    )}

                    {errorMsg && (
                      <p className="text-sm mb-4" style={{ color: "#e55" }}>
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                      style={{ backgroundColor: "var(--accent)", color: "var(--accent-text)" }}
                    >
                      {status === "sending" ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {step > 0 && !isAnimating && (
              <button
                onClick={goBack}
                className="mt-6 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
                style={{ color: "var(--text-faint)" }}
              >
                ← Wróć
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
