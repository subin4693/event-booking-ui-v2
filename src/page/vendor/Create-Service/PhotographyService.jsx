import React from "react";
import ClientInputMenu from "@/components/ClientInputMenu";

const PhotographyService = ({ options, setOptions }) => {
    return (
        <div className="mt-4">
            <ClientInputMenu
                value={options}
                setValue={setOptions}
                title={"Portfolio"}
                placeholder={"Type here...."}
            />
        </div>
    );
};

export default PhotographyService;
