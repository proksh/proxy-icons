import * as React from "react";
import { IconProps } from "./types";

export const ProEyeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11h2v1a3 3 0 1 1-3-3h1z" />
        <path
          fill={color}
          d="M12 4.5c-2.384 0-4.245 1.285-5.744 2.691-.717.674-1.387 1.41-2.004 2.088l-.09.099c-.655.72-1.244 1.361-1.823 1.872l-.85.75.85.75c.579.51 1.168 1.152 1.824 1.872l.09.098c.616.68 1.286 1.415 2.003 2.089C7.755 18.215 9.616 19.5 12 19.5s4.245-1.285 5.744-2.691c.717-.674 1.387-1.41 2.004-2.089l.09-.098c.655-.72 1.244-1.361 1.823-1.872l.85-.75-.85-.75c-.579-.51-1.168-1.152-1.824-1.872l-.09-.099c-.616-.678-1.286-1.414-2.003-2.088C16.245 5.785 14.384 4.5 12 4.5m-6.358 8.776c-.39-.43-.79-.866-1.194-1.276.405-.41.803-.847 1.194-1.276l.072-.08c.631-.693 1.253-1.377 1.911-1.995C9 7.36 10.385 6.5 12 6.5s3 .859 4.375 2.15c.658.617 1.28 1.3 1.91 1.994l.073.08c.39.43.79.866 1.194 1.276-.405.41-.803.847-1.194 1.276l-.073.08c-.63.693-1.252 1.377-1.91 1.995C15 16.64 13.615 17.5 12 17.5s-3-.859-4.375-2.15c-.658-.617-1.28-1.3-1.91-1.994z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProEyeLine;
