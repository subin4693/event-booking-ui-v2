import { ImageIcon } from "lucide-react";
import React, { useState } from "react";
// import { CiImageOn } from "react-icons/ci";

const ClientInputImage = ({ title, value, setValue }) => {
    const [image, setImage] = useState();
    return (
        <>
            &nbsp;&nbsp;<label>{title} : </label>
            <br />
            <div className="  bg-input rounded-[25px] h-[200px] overflow-hidden border border-[2px] border-primary group shadow-custom">
                <label className=" h-full h-full cursor-pointer flex items-center justify-center">
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            return setValue([e.target.files[0]]);
                        }}
                    />
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            className="w-full h-full object-cover group-hover:scale-95 transition-all duration-100"
                        />
                    ) : (
                        <>
                            {" "}
                            <ImageIcon className="size-20 text-gray-400" />
                            {/* <CiImageOn className="size-20 text-gray-400" />{" "} */}
                        </>
                    )}
                </label>
            </div>
        </>
    );
};

export default ClientInputImage;
