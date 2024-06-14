import * as React from "react";
import { IconProps } from "./types";

export const ProPlanetFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#a)">
          <path d="M4.295 7.344c-.886.077-1.681.228-2.322.472-.705.268-1.515.766-1.711 1.689s.341 1.708.876 2.24c.573.568 1.394 1.107 2.355 1.602 1.933.996 4.643 1.921 7.675 2.566s5.884.901 8.056.777c1.078-.06 2.048-.219 2.802-.506.705-.268 1.515-.766 1.712-1.69.189-.888-.304-1.648-.809-2.17-.494-.51-1.187-.995-1.997-1.444A9.004 9.004 0 0 0 4.295 7.344m-.94 2.151a9 9 0 0 0-.271 1.277 4.6 4.6 0 0 1-.536-.447c-.208-.206-.283-.337-.31-.4.05-.047.172-.136.446-.24q.28-.106.671-.19m17.561 3.733a4.4 4.4 0 0 1 .576.487c.177.183.244.3.27.36-.05.046-.172.136-.446.24q-.28.106-.671.19a9 9 0 0 0 .271-1.277m-10.008 3.907c-2.93-.622-5.567-1.507-7.506-2.47a9 9 0 0 0 6.727 6.138 9 9 0 0 0 8.642-2.872c-2.164.092-4.933-.173-7.863-.796" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProPlanetFill;
