import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { turnstileToken, goal, support, obstacle, frequency, name, phone, email } = body;

  if (!turnstileToken) {
    return NextResponse.json({ error: "Brak tokenu CAPTCHA." }, { status: 400 });
  }

  const valid = await verifyTurnstile(turnstileToken);
  if (!valid) {
    return NextResponse.json({ error: "Weryfikacja CAPTCHA nie powiodła się." }, { status: 400 });
  }

  if (!name || !phone) {
    return NextResponse.json({ error: "Imię i numer telefonu są wymagane." }, { status: 400 });
  }

  const goalLabels: Record<string, string> = {
    sila: "Zwiększenie siły maksymalnej",
    technika: "Poprawa techniki ćwiczeń",
    masa: "Zwiększenie masy mięśniowej",
    redukcja: "Redukcja tkanki tłuszczowej",
    sprawnosc: "Powrót do sprawności / pozbycie się bólu",
  };
  const supportLabels: Record<string, string> = {
    "1on1": "Treningi personalne 1/1",
    para: "Treningi w parze",
    online: "Współpraca hybrydowa / online",
    konsultacja: "Jednorazowe konsultacje",
  };
  const obstacleLabels: Record<string, string> = {
    motywacja: "Brak systematyczności i motywacji",
    plan: "Brak konkretnego planu działania",
    kontuzja: "Lęk przed kontuzją / słaba technika",
    efekty: "Brak widocznych efektów mimo ćwiczeń",
  };
  const frequencyLabels: Record<string, string> = {
    "1": "1 raz w tygodniu",
    "2": "2 razy w tygodniu",
    "3+": "3 lub więcej razy w tygodniu",
  };

  const html = `
    <h2 style="font-family:sans-serif;color:#111;">Nowe zgłoszenie z formularza kontaktowego</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;width:200px;">Imię</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">Telefon</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;">${phone}</td></tr>
      ${email ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${email}</td></tr>` : ""}
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">Cel treningowy</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${goalLabels[goal] ?? goal}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">Forma wsparcia</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${supportLabels[support] ?? support}</td></tr>
      <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#555;">Co utrudniało osiągnięcie celu</td><td style="padding:10px 0;border-bottom:1px solid #eee;">${obstacleLabels[obstacle] ?? obstacle}</td></tr>
      <tr><td style="padding:10px 0;color:#555;">Treningi w tygodniu</td><td style="padding:10px 0;">${frequencyLabels[frequency] ?? frequency}</td></tr>
    </table>
  `;

  await resend.emails.send({
    from: "Formularz BL-Results <onboarding@resend.dev>",
    to: "szkmk131@gmail.com",//"grzesiek_bl@wp.pl",
    subject: `Nowe zgłoszenie — ${name}`,
    html,
  });

  return NextResponse.json({ success: true });
}
