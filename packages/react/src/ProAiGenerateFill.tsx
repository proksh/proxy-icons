import * as React from "react";
import { IconProps } from "./types";

export const ProAiGenerateFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M18.449 2.868 18.635 2h.73l.187.868c.085.396.238.765.448 1.096l.023.036c.255.39.588.722.977.977l.036.023c.33.21.7.363 1.096.449l.868.186v.73l-.868.186A3.4 3.4 0 0 0 21.036 7L21 7.023c-.39.255-.722.588-.977.977L20 8.036c-.21.33-.363.7-.448 1.096l-.187.868h-.73l-.187-.868A3.4 3.4 0 0 0 18 8.036L17.977 8A3.4 3.4 0 0 0 17 7.023L16.964 7c-.33-.21-.7-.363-1.096-.449L15 6.366v-.73l.868-.186A3.4 3.4 0 0 0 16.964 5L17 4.977c.39-.255.722-.588.977-.977L18 3.964c.21-.33.363-.7.448-1.096"
        />
        <path
          fill={color}
          d="M15.553 3.982A1.86 1.86 0 0 0 16.824 3H2v18h20V8.176c-.495.25-.862.713-.982 1.271l-.44 2.053h-3.155l-.441-2.053a1.86 1.86 0 0 0-1.43-1.429l-2.052-.44V4.422z"
        />
      </svg>
    );
  },
);

export default ProAiGenerateFill;
