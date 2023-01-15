import React from "react";

function ImageShow({ image }) {
  const photo = image.urls.small;
  const desc = image.alt_desciption;
  return (
    <div>
      <img src={photo} alt={desc} />
    </div>
  );
}

export default ImageShow;
