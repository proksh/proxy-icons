import * as React from "react";
import { IconProps } from "./types";

export const ProZhihuFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.374 18.897h1.452l.478 1.637 2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087-.315-1.084-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848.365-.04 1.573-.073 2.284-1.378.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764 1.27.363 2.536-.057 3.162-.614 0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.465-.47-1.465"
        />
      </svg>
    );
  },
);

export default ProZhihuFill;
