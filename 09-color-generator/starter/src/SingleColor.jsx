import React from "react";
import { toast } from "react-toastify";

function SingleColor({ id, color, index }) {
  const { rgb, weight, hex } = color;


  const copyToClipboard = async () => {
    if(navigator.clipboard){
        try {
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success("copied successfully");
          } catch (error) {
            console.log(error);
            toast.error("Failed to copy color to clipboard");
          }
    } else {
        toast.error("Clipboard access not available")
    }

  }
  return (
    <article className={index < 10 ? "color" : "color color-light"} style={{background: `#${hex}`}} onClick={copyToClipboard}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
