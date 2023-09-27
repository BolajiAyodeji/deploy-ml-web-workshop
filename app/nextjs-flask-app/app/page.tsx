"use client";

import { FormEvent, useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import { Footer } from "./components/Footer";

type PredictionData = {
  name: string;
  country: string;
  prediction: string;
};

export default function Home() {
  const [predictionData, setPredictionData] = useState<PredictionData | null>(
    null
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await fetch("/api/predict", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      setPredictionData(await response.json());
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        {predictionData === null ? (
          <Form onSubmit={handleSubmit} />
        ) : (
          <Result {...predictionData} />
        )}
      </div>
      <Footer />
    </main>
  );
}
