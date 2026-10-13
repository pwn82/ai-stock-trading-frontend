export default function StrategyCard({
  text
}) {

  return (

    <div className="card shadow-sm border-0 h-100">

      <div className="card-body">

        <h3 className="h5">
          Trading Strategy Agent
        </h3>

        <pre className="analysis-text">
          {text}
        </pre>

      </div>

    </div>
  );
}