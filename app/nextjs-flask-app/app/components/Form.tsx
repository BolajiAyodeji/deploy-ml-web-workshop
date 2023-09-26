import React from "react";
import countries from "@/public/countries.json";

export default function Form(props: {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Fullname:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 shadow"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="country"
        >
          Country:
        </label>
        <select
          id="country"
          name="country"
          className="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 shadow"
          required
        >
          {countries.map((country) => (
            <option key={country.alpha_3_code} value={country.nationality}>
              {country.en_short_name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none w-full bg-white border border-gray-400 py-2 px-3 text-gray-700"
          rows={10}
          required
        ></textarea>
      </div>

      <input
        type="submit"
        value="Submit"
        className="cursor-pointer w-full bg-black text-white font-bold mt-8 p-4 focus:outline-none focus:shadow-outline"
      />
    </form>
  );
}
