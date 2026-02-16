import Form from "@/components/Form";

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">Frontend Mentor | Contact from with Next.js</h1>
        <main className="min-h-dvh grid place-items-center px-4 py-6">
          <Form />

          <div className="hidden">Message Sent!
            Thanks for completing the form. We'll be in touch soon!
          </div>
        </main>
    </div>
  );
}
