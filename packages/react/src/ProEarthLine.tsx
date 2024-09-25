import * as React from "react";
import { IconProps } from "./types";

export const ProEarthLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M6.895 5.84A7.97 7.97 0 0 1 12 4c1.345 0 2.613.332 3.725.918l-.013.009c-.488.3-1.169.72-1.33.72h-1.588c-.265 0-1.509 1.138-1.323 1.324.171.171.566.009.895-.127.177-.073.335-.138.428-.138.265 0 .265.794 0 1.059s-1.853.264-2.117.264c-.265 0-.795 1.06-.795 1.324 0 .265.265.53.53.53.132 0 .53-.265.926-.53.397-.265.794-.53.927-.53.132 0 .33.133.53.265.198.133.396.265.528.265.103 0 .284-.118.483-.248.316-.207.679-.444.841-.281.152.152-.134.392-.404.619-.2.167-.39.327-.39.44 0 .264.265.264.53.264.264 0 .264.53 0 .53h-1.854c-.132 0-.264-.133-.397-.265-.132-.133-.264-.265-.397-.265-.264 0-2.911 1.059-2.911 1.324v1.588c0 .264 1.058 1.059 1.323 1.059.132 0 .33-.066.53-.133.198-.066.396-.132.529-.132.265 0 1.059 1.324 1.059 1.588 0 .132-.067.265-.133.397-.066.133-.132.265-.132.397 0 .265.265.794.53 1.06.264.264.793.528 1.058.264.265-.265 1.589-1.588 1.589-1.853v-.794c0-.116.178-.273.367-.44.241-.212.5-.44.427-.62-.037-.084-.152-.091-.291-.1-.164-.01-.36-.02-.503-.164-.265-.264-.265-2.382-.265-2.382s.53 1.588.794 1.853c.265.264 1.059-.53 1.059-.794 0-.265-.53-1.324-.53-1.324l.53.53c.176.176.353.117.53.058a.9.9 0 0 1 .264-.058c.132 0 .33.463.53.926.198.463.396.926.529.926.143 0 .209-.232.28-.488.062-.216.128-.449.25-.57.15-.151.53-.215.852-.247a8 8 0 0 1-13.149 6.105c.162-.512.384-1.3.384-1.623 0-.332-.417-.456-.793-.568-.223-.066-.432-.128-.53-.226-.133-.133-.199-.397-.265-.662s-.132-.53-.265-.662c-.173-.173-.773-.453-1.188-.621A8 8 0 0 1 4.04 11.2c.627-.328 1.607-.888 1.607-1.053 0-.132-.132-.53-.265-.926-.132-.397-.264-.795-.264-.927 0-.265.53-.794.794-.794.132 0 .198.265.264.53.067.264.133.529.265.529.265 0 1.059-1.588 1.059-1.853 0-.191-.375-.621-.605-.866"
        />
      </svg>
    );
  },
);

export default ProEarthLine;
