export default function Header() {

  return (
    <header className="bg-slate-900 text-white shadow">

      <div className="container-fluid px-4 py-3">

        <div className="d-flex justify-content-between align-items-center">

          <div>

            <h1 className="h4 mb-0">
              AI Stock Analysis
            </h1>

            <small className="text-secondary">
              CrewAI Multi-Agent Paper Trading System
            </small>

          </div>

          <span className="badge text-bg-success">
            AI ONLINE
          </span>

        </div>

      </div>

    </header>
  );
}