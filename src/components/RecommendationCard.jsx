export default function RecommendationCard({
  text
}) {

  return (

    <div className="bg-dark text-white rounded-4 p-4 shadow">

      <h2 className="h4">
        Final Recommendation
      </h2>

      <pre
        className="analysis-text text-white"
      >
        {text}
      </pre>

      <div className="alert alert-warning mt-3 mb-0">

        Educational paper-trading output only.
        It does not place real orders and should
        not be treated as guaranteed financial advice.

      </div>

    </div>
  );
}