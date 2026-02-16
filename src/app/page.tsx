'use client'
import Form from "@/components/Form";
import Toast from "@/components/Toast";
import { useState } from "react";

export default function Home() {
  const [ success, setSuccess ] = useState(false)

  return (
    <div>
      <h1 className="sr-only">Frontend Mentor | Contact from with Next.js</h1>
        <main className="min-h-dvh grid place-items-center px-4 py-6">
          <Form setSuccess={setSuccess} />

          {success && <Toast onClose={() => setSuccess(false)} />}
        </main>
    </div>
  );
}
