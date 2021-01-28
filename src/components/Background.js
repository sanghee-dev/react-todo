import React, { useEffect, useState } from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const Background = () => {
  const [imageSrc, setImageSrc] = useState(image1);
  useEffect(() => {
    const random = Math.floor(Math.random() * 3) + 1;
    setImageSrc(random === 1 ? image1 : random === 2 ? image2 : image3);
  }, []);
  return (
    <>
      <div
        className="Background"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </>
  );
};

export default Background;
