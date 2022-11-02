import React from "react";

const vedio = () => {
  return (
    <>
      <div className="flex justify-center my-12 items-center">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://youtu.be/gElfIo6uw4g"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
};

export default vedio;
