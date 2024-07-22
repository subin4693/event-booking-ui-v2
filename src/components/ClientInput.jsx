import React from "react";

const ClientInput = ({ type, title, value, setValue }) => {
  return (
    <>
      &nbsp;&nbsp;<label>{title} : </label>
      <br />
      <input
        type={type}
        className="bg-input rounded-[25px] p-2 w-full shadow-custom focus:outline-none border-4 focus:border-slate-400"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default ClientInput;
