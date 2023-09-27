import React from "react";

type PredictionData = {
  name: string;
  country: string;
  prediction: string;
};

export default function Result(props: PredictionData) {
  return (
    <div>
      <div className="mt-12">
        <p id="name" className="text-gray-700 font-bold">
          Fullname: <span className="font-medium">{props.name}</span>
        </p>
        <br />
        <p id="country" className="text-gray-700 font-bold">
          Nationality: <span className="font-medium">{props.country}</span>
        </p>
        <br />
        <p className="text-gray-700 font-bold">
          Prediction:{" "}
          <span className="text-blue-700 font-medium">{props.prediction}</span>
        </p>
      </div>
      <div className="my-12">
        <button
          className="bg-black text-white py-2 px-4"
          onClick={() => window.location.reload()}
        >
          {" "}
          Go Back{" "}
        </button>
      </div>
    </div>
  );
}
