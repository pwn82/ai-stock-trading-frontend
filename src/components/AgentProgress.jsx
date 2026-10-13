export default function AgentProgress({
  agents = []
}) {

  const names = [
    "Data Analyst",
    "Trading Strategy",
    "Execution Planner",
    "Risk Manager"
  ];


  return (

    <div className="row g-3">

      {names.map((name) => {

        const completed =
          agents.some(
            x => x.agent === name
          );

        return (

          <div
            className="col-md-3"
            key={name}
          >

            <div
              className={
                `rounded-4 p-3 border ` +
                (
                  completed
                    ? "border-success bg-success-subtle"
                    : "bg-light"
                )
              }
            >

              <div className="fw-semibold">
                {name}
              </div>

              <small>
                {completed
                  ? "Completed"
                  : "Waiting"}
              </small>

            </div>

          </div>

        );

      })}

    </div>
  );
}