import { useState } from "react";

import StockInputForm
  from "../components/StockInputForm";

import AgentProgress
  from "../components/AgentProgress";

import MarketSummary
  from "../components/MarketSummary";

import StrategyCard
  from "../components/StrategyCard";

import ExecutionCard
  from "../components/ExecutionCard";

import RiskCard
  from "../components/RiskCard";

import RecommendationCard
  from "../components/RecommendationCard";

import CsvFilesPanel
  from "../components/CsvFilesPanel";

import ChatPanel
  from "../components/ChatPanel";

import {
  runStockAnalysis
} from "../api/analysisApi";


export default function Dashboard() {

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const [error, setError] =
    useState("");


  async function analyze(form) {

    try {

      setLoading(true);

      setError("");

      setResult(null);

      const response =
        await runStockAnalysis(form);

      setResult(response);

    } catch (error) {

      console.error(error);

      setError(
        error?.response?.data?.detail ||
        error.message ||
        "Analysis failed"
      );

    } finally {

      setLoading(false);
    }
  }


  return (

    <main className="container-fluid px-4 py-4">

      <div className="row g-4">

        <div className="col-lg-3">

          <StockInputForm
            onSubmit={analyze}
            loading={loading}
          />

        </div>


        <div className="col-lg-9">

          {error && (

            <div className="alert alert-danger">
              {error}
            </div>

          )}


          {loading && (

            <div className="alert alert-info">
              CrewAI agents are analyzing the
              selected stock data...
            </div>

          )}


          {result && (

            <>

              <AgentProgress
                agents={result.agents}
              />

              <div className="mt-4">

                <MarketSummary
                  data={result.market_data}
                />

              </div>


              <div className="mt-4">

                <h2 className="h5">
                  Data Analyst
                </h2>

                <div className="card border-0 shadow-sm">

                  <div className="card-body">

                    <pre className="analysis-text">
                      {result.data_analysis}
                    </pre>

                  </div>

                </div>

              </div>


              <div className="row g-4 mt-1">

                <div className="col-lg-6">

                  <StrategyCard
                    text={
                      result.trading_strategy
                    }
                  />

                </div>


                <div className="col-lg-6">

                  <ExecutionCard
                    text={
                      result.execution_plan
                    }
                  />

                </div>


                <div className="col-lg-12">

                  <RiskCard
                    text={
                      result.risk_report
                    }
                  />

                </div>

              </div>


              <div className="mt-4">

                <RecommendationCard
                  text={
                    result.final_recommendation
                  }
                />

              </div>


              <div className="mt-4">

                <h2 className="h5">
                  Files Selected By Backend
                </h2>

                {result.selected_files.map(
                  (file, index) => (

                    <div
                      className="bg-white border rounded p-3 mb-2"
                      key={index}
                    >

                      <div className="fw-semibold">
                        {file.file_name}
                      </div>

                      <small>
                        {file.full_path}
                      </small>

                    </div>

                  )
                )}

              </div>

            </>

          )}

        </div>

      </div>


      <div className="row g-4 mt-3">

        <div className="col-lg-6">

          <CsvFilesPanel />

        </div>


        <div className="col-lg-6">

          <ChatPanel
            stockSymbol={
              result?.stock_symbol
            }
          />

        </div>

      </div>

    </main>
  );
}