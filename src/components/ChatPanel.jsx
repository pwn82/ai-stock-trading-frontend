import { useState } from "react";

import {
  askChat
} from "../api/chatApi";


export default function ChatPanel({
  stockSymbol
}) {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  async function send() {

    if (!question.trim()) {
      return;
    }

    try {

      setLoading(true);

      const result =
        await askChat(
          question,
          stockSymbol
        );

      setAnswer(
        result.answer
      );

    } catch (error) {

      setAnswer(
        error?.response?.data?.detail ||
        error.message
      );

    } finally {

      setLoading(false);
    }
  }


  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h3 className="h5">
          Ask AI About Your CSV Data
        </h3>

        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder={
            "Example: What was the latest " +
            "price in my CSV?"
          }
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={send}
          disabled={loading}
        >

          {loading
            ? "Analyzing..."
            : "Ask AI"}

        </button>


        {answer && (

          <div className="mt-3">

            <div className="fw-semibold">
              AI Response
            </div>

            <pre className="analysis-text bg-light p-3 rounded">
              {answer}
            </pre>

          </div>

        )}

      </div>

    </div>
  );
}