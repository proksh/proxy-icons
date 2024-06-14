import * as React from "react";
import { IconProps } from "./types";

export const ProChatQuestionAnswerFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path fill={color} d="M1 2h17v13H5.362L1 18.635z" />
      <path fill={color} d="M8 17h10.362L20 18.365V8h2v14.635L17.638 19H8z" />
    </svg>
  );
});

export default ProChatQuestionAnswerFill;
