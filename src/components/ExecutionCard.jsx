export default function ExecutionCard({
  text
}) {

  return (

    <div className="card shadow-sm border-0 h-100">

      <div className="card-body">

        <h3 className="h5">
          Execution Planning Agent
        </h3>

        <pre className="analysis-text">
          {text}
        </pre>

      </div>

    </div>
  );
}