export default function MarketSummary({
  data
}) {

  if (!data) {
    return null;
  }


  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h3 className="h5">
          Market Data
        </h3>

        <div className="row">

          <div className="col-md-4">

            <div className="text-secondary">
              CSV files found
            </div>

            <div className="fs-4 fw-bold">
              {data.files_found}
            </div>

          </div>


          <div className="col-md-8">

            <div className="text-secondary">
              Indicators
            </div>

            <pre className="small bg-light p-3 rounded">
              {JSON.stringify(
                data.indicators,
                null,
                2
              )}
            </pre>

          </div>

        </div>

      </div>

    </div>
  );
}