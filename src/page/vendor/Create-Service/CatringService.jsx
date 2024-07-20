import React from "react";

import ClientInputMenu from "@/components/ClientInputMenu";

const CatringService = ({ options, setOptions }) => {
    return (
        <div className="mt-4">
            <ClientInputMenu
                value={options}
                setValue={setOptions}
                title={"Menu options"}
                placeholder={"Type here...."}
            />
        </div>
    );
};

export default CatringService;
