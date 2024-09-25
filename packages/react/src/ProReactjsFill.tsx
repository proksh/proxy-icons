import * as React from "react";
import { IconProps } from "./types";

export const ProReactjsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="M11.378 20.128q.31-.245.622-.524.312.279.623.524c.81.637 1.633 1.114 2.422 1.35.79.235 1.616.244 2.33-.168.715-.413 1.12-1.132 1.31-1.935.191-.8.19-1.752.043-2.772a13 13 0 0 0-.142-.8q.398-.131.764-.278c.957-.383 1.782-.858 2.38-1.423.599-.567 1.02-1.277 1.02-2.102s-.421-1.535-1.02-2.102c-.598-.565-1.423-1.04-2.38-1.423q-.367-.146-.765-.277.086-.41.142-.8c.147-1.02.149-1.972-.042-2.773s-.596-1.522-1.31-1.935c-.715-.412-1.54-.402-2.33-.167s-1.613.712-2.423 1.35q-.31.244-.622.522-.312-.278-.622-.522c-.81-.638-1.634-1.115-2.422-1.35-.79-.235-1.616-.245-2.33.167-.715.413-1.12 1.133-1.31 1.935-.191.8-.19 1.752-.043 2.773q.056.39.142.8-.398.131-.765.277c-.957.383-1.782.858-2.38 1.423-.599.567-1.02 1.277-1.02 2.102s.421 1.535 1.02 2.102c.598.565 1.423 1.04 2.38 1.423q.367.146.764.277-.085.41-.142.8c-.147 1.021-.148 1.973.043 2.773.191.803.595 1.522 1.31 1.935.714.412 1.54.403 2.33.167.789-.235 1.613-.712 2.423-1.35m-4.003-.117c-.242-.14-.47-.431-.601-.983-.132-.555-.148-1.303-.017-2.211q.043-.3.106-.614c.773.177 1.603.315 2.475.408.516.708 1.05 1.358 1.59 1.939q-.24.211-.478.399c-.722.567-1.377.928-1.923 1.09-.544.163-.91.112-1.152-.028M12 17.5a18 18 0 0 1-.663-.758 26 26 0 0 0 1.326 0q-.33.4-.663.758m5.243-.683c.131.908.115 1.656-.017 2.21-.131.553-.358.844-.6.984-.243.14-.609.19-1.153.029-.546-.163-1.201-.523-1.923-1.091a11 11 0 0 1-.478-.4c.54-.58 1.074-1.23 1.59-1.938.872-.093 1.702-.23 2.475-.408q.063.315.106.614m1.55-2.685q-.28.112-.584.215A21 21 0 0 0 17.325 12c.355-.802.65-1.59.883-2.347q.304.103.585.215c.852.34 1.492.728 1.906 1.12.412.39.551.732.551 1.012s-.139.622-.551 1.012c-.414.392-1.054.78-1.907 1.12m-2.03.618a18 18 0 0 1-.988.195 26 26 0 0 0 .663-1.149q.18.487.325.954m-1.949-1.125a24 24 0 0 1-.978 1.556 24 24 0 0 1-3.672 0A24 24 0 0 1 8.327 12a24 24 0 0 1 1.837-3.18 24 24 0 0 1 3.673 0A24 24 0 0 1 15.673 12q-.386.806-.859 1.625m1.949-4.375q-.145.468-.325.953a26 26 0 0 0-.663-1.148q.51.087.988.195m.373-1.453a21 21 0 0 0-2.473-.408 21 21 0 0 0-1.591-1.939q.24-.212.478-.398c.721-.568 1.377-.928 1.923-1.091.544-.163.91-.111 1.152.028.242.14.47.431.6.984.133.554.148 1.302.017 2.21q-.043.3-.105.614m-6.685-2.745q.236.186.477.398a21 21 0 0 0-1.59 1.939c-.872.093-1.702.23-2.474.408q-.063-.316-.106-.613c-.131-.91-.116-1.657.016-2.211s.36-.844.601-.984c.242-.14.608-.19 1.152-.028.547.163 1.202.523 1.924 1.09M5.207 9.868q.28-.112.585-.215c.233.758.528 1.545.884 2.347a21 21 0 0 0-.884 2.347q-.304-.103-.585-.215c-.852-.34-1.492-.728-1.906-1.12-.412-.39-.551-.732-.551-1.012s.139-.622.551-1.012c.414-.392 1.054-.78 1.906-1.12m2.03-.618q.477-.108.988-.195a26 26 0 0 0-.663 1.148q-.18-.486-.325-.953m0 5.5q.144-.467.325-.954a26 26 0 0 0 .663 1.149q-.51-.087-.988-.195m5.426-7.492a26 26 0 0 0-1.326 0q.33-.4.663-.758.332.36.663.758"
        />
      </svg>
    );
  },
);

export default ProReactjsFill;
