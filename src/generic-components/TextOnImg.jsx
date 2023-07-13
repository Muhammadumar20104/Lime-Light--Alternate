import React from "react";

export default function TextOnImg({classN,Text,imgSrc,hStyle} ) {
  return (
    <div className={classN}>
      <img src={imgSrc} alt="Blank" className="object-cover overflow-visible  md:object-cover md:object-top md:overflow-visible  rounded-lg" />
      <h1 class={hStyle}>
        {Text}
      </h1>
    </div>
  );
}
