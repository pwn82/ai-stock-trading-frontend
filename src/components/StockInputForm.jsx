import { useState } from "react";


export default function StockInputForm({
  onSubmit,
  loading
}) {

  const [form, setForm] = useState({

    stock_symbol: "AAPL",

    capital: 100000,

    risk_tolerance: "moderate",

    strategy_preference:
      "trend following",

    news_impact_consideration:
      true,

    user_question:
      "Analyze this stock using the available CSV data."
  });


  function update(
    field,
    value
  ) {

    setForm({
      ...form,
      [field]: value
    });
  }


  function submit(event) {

    event.preventDefault();

    onSubmit(form);
  }


  return (

    <form
      onSubmit={submit}
      className="bg-white rounded-4 shadow-sm p-4"
    >

      <h2 className="h5 mb-4">
        Analysis Input
      </h2>


      <div className="mb-3">

        <label className="form-label">
          Stock Symbol
        </label>

        <input
          className="form-control"
          value={form.stock_symbol}
          onChange={(e) =>
            update(
              "stock_symbol",
              e.target.value
            )
          }
        />

      </div>


      <div className="mb-3">

        <label className="form-label">
          Capital
        </label>

        <input
          type="number"
          className="form-control"
          value={form.capital}
          onChange={(e) =>
            update(
              "capital",
              Number(e.target.value)
            )
          }
        />

      </div>


      <div className="mb-3">

        <label className="form-label">
          Risk Tolerance
        </label>

        <select
          className="form-select"
          value={form.risk_tolerance}
          onChange={(e) =>
            update(
              "risk_tolerance",
              e.target.value
            )
          }
        >

          <option value="low">
            Low
          </option>

          <option value="moderate">
            Moderate
          </option>

          <option value="high">
            High
          </option>

        </select>

      </div>


      <div className="mb-3">

        <label className="form-label">
          Strategy
        </label>

        <select
          className="form-select"
          value={
            form.strategy_preference
          }
          onChange={(e) =>
            update(
              "strategy_preference",
              e.target.value
            )
          }
        >

          <option>
            trend following
          </option>

          <option>
            momentum
          </option>

          <option>
            mean reversion
          </option>

          <option>
            value
          </option>

        </select>

      </div>


      <div className="form-check mb-3">

        <input
          type="checkbox"
          className="form-check-input"
          checked={
            form.news_impact_consideration
          }
          onChange={(e) =>
            update(
              "news_impact_consideration",
              e.target.checked
            )
          }
        />

        <label className="form-check-label">
          Consider news impact
        </label>

      </div>


      <div className="mb-3">

        <label className="form-label">
          Question
        </label>

        <textarea
          className="form-control"
          rows="3"
          value={form.user_question}
          onChange={(e) =>
            update(
              "user_question",
              e.target.value
            )
          }
        />

      </div>


      <button
        type="submit"
        className="btn btn-dark w-100"
        disabled={loading}
      >

        {loading
          ? "Running Agents..."
          : "Run AI Analysis"}

      </button>

    </form>
  );
}