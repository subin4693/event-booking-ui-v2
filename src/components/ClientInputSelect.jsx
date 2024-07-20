import React from "react";

const InputSelect = ({ title, value, setValue }) => {
    return (
        <>
            &nbsp;&nbsp;<label>{title} : </label>
            <br />
            <select
                type="select"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-input rounded-[25px] p-2 w-full shadow-custom"
            >
                <option className="bg-input">User</option>
                <option>Client</option>
            </select>
        </>
    );
};

export default InputSelect;
