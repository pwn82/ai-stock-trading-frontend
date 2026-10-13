import { useEffect, useState } from "react";

import {
  scanCsvFiles,
  getCsvFiles
} from "../api/fileApi";


export default function CsvFilesPanel() {

  const [files, setFiles] = useState([]);

  const [loading, setLoading] =
    useState(false);


  async function loadFiles() {

    try {

      setLoading(true);

      const result =
        await getCsvFiles();

      setFiles(
        result.files || []
      );

    } finally {

      setLoading(false);

    }
  }


  async function scan() {

    try {

      setLoading(true);

      const result =
        await scanCsvFiles();

      setFiles(
        result.files || []
      );

    } finally {

      setLoading(false);

    }
  }


  useEffect(() => {

    loadFiles();

  }, []);


  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <div className="d-flex justify-content-between">

          <h3 className="h5">
            Local CSV Files
          </h3>

          <button
            className="btn btn-sm btn-outline-dark"
            onClick={scan}
            disabled={loading}
          >
            {loading
              ? "Scanning..."
              : "Scan Drives"}
          </button>

        </div>


        <div className="mt-3">

          {files.length === 0 ? (

            <div className="text-secondary">
              No indexed stock CSV files.
            </div>

          ) : (

            files.slice(0, 20).map(
              (file, index) => (

                <div
                  key={index}
                  className="border rounded p-2 mb-2"
                >

                  <div className="fw-semibold">
                    {file.file_name}
                  </div>

                  <small className="text-secondary">
                    {file.full_path}
                  </small>

                </div>

              )
            )

          )}

        </div>

      </div>

    </div>
  );
}