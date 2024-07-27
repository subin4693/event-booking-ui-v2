import { ImageIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { CiImageOn } from "react-icons/ci";

const DecorationServiceEdit = ({
    images,
    setImages,
    newDecorationImages,
    setNewDecorationImages,
}) => {
    const [img1, setImg1] = useState(
        images[0] ? `data:image/jpeg;base64,${images[0].data}` : null
    );
    const [img2, setImg2] = useState(
        images[1] ? `data:image/jpeg;base64,${images[1].data}` : null
    );
    const [img3, setImg3] = useState(
        images[2] ? `data:image/jpeg;base64,${images[2].data}` : null
    );
    const [img4, setImg4] = useState(null);

    const handleFileChange = (index, setImg) => (e) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setNewDecorationImages([...newDecorationImages, file]);
            setImages(newImages);
            setImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="mt-5  h-full  ">
            &nbsp;&nbsp;<label>Decoration images : </label>
            <br />
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className=" h-full cursor-pointer flex items-center justify-center">
                    {img1 ? (
                        <div className="relative w-full h-full">
                            <img
                                src={img1}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={handleFileChange(0, setImg1)}
                    />
                </label>
            </div>
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img2 ? (
                        <div className="relative w-full h-full">
                            <img
                                // src={URL.createObjectURL(img2)}
                                src={img2}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={handleFileChange(1, setImg2)}
                    />
                </label>
            </div>
            <br />
            <div className="  bg-input rounded-[25px] h-[300px] overflow-hidden border-[2px] border-primary group">
                <label className="h-full cursor-pointer flex items-center justify-center">
                    {img3 ? (
                        <div className="relative w-full h-full">
                            <img
                                src={img3}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                        </div>
                    ) : (
                        <ImageIcon className="size-20 text-gray-400" />
                    )}
                    <input
                        type="file"
                        className="hidden w-full"
                        onChange={handleFileChange(2, setImg3)}
                    />
                </label>
            </div>
        </div>
    );
};

export default DecorationServiceEdit;
