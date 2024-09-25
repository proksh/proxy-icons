import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-orange-50 fixed left-1/2 transform -translate-x-1/2 max-w-[1440px] w-full py-5 top-4 z-20 px-10 rounded-3xl flex align-center justify-between">
      <Link href="/">
        <svg
          className="h-6 w-auto"
          width="668"
          height="120"
          viewBox="0 0 668 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_433_45)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.3789 110.656V81.1063L18.4837 102.001L8.65601 92.1738L29.5522 71.2776H0V57.3791H29.5502L8.65472 36.4837L18.4824 26.656L39.3789 47.5525V18H53.2774V47.5524L74.174 26.6558L84.0017 36.4835L63.1061 57.3791H92.6565V71.2776H63.104L84.0004 92.174L74.1727 102.002L53.2774 81.1063V110.656H39.3789ZM644.359 96.6322C637.369 96.6322 631.716 95.0561 627.399 91.904C623.116 88.7175 620.512 84.2291 619.587 78.4388L633.874 76.2802C634.457 78.8842 635.742 80.9228 637.729 82.3961C639.75 83.8694 642.303 84.606 645.387 84.606C647.922 84.606 649.875 84.1263 651.245 83.167C652.616 82.1734 653.301 80.8029 653.301 79.0555C653.301 77.9591 653.027 77.0854 652.479 76.4344C651.931 75.7492 650.697 75.081 648.779 74.43C646.894 73.7791 643.948 72.9225 639.939 71.8603C635.416 70.6954 631.801 69.3934 629.095 67.9544C626.388 66.5154 624.435 64.8023 623.236 62.815C622.037 60.7935 621.437 58.3609 621.437 55.5171C621.437 51.9538 622.345 48.8702 624.161 46.2662C625.977 43.628 628.529 41.6065 631.819 40.2017C635.142 38.7627 639.048 38.0432 643.536 38.0432C647.888 38.0432 651.742 38.7113 655.1 40.0475C658.458 41.3838 661.164 43.2854 663.22 45.7523C665.31 48.2192 666.595 51.1315 667.075 54.4892L652.787 57.0589C652.547 55.0032 651.657 53.3757 650.115 52.1765C648.573 50.9773 646.483 50.2749 643.845 50.0693C641.275 49.898 639.202 50.2407 637.626 51.0972C636.084 51.9538 635.313 53.1872 635.313 54.7976C635.313 55.7569 635.639 56.5621 636.29 57.2131C636.975 57.8641 638.363 58.5322 640.453 59.2175C642.577 59.9027 645.798 60.7935 650.115 61.8899C654.329 62.9863 657.704 64.2712 660.239 65.7445C662.809 67.1835 664.676 68.9309 665.841 70.9866C667.006 73.0081 667.589 75.4579 667.589 78.336C667.589 84.0236 665.533 88.4948 661.421 91.7498C657.31 95.0047 651.622 96.6322 644.359 96.6322ZM598.234 68.88V95.0909H612.418V63.9462C612.418 63.0211 612.35 61.5478 612.213 59.5263C612.076 57.5048 611.682 55.2778 611.031 52.8451C610.38 50.3782 609.283 48.0141 607.741 45.7528C606.234 43.4914 604.11 41.6241 601.369 40.1508C598.628 38.6775 595.081 37.9409 590.73 37.9409C585.282 37.9409 580.76 39.1229 577.162 41.4871C575.493 42.5941 574.02 43.8628 572.742 45.2929V39.5855H560.305V95.0909H574.49V66.927C574.49 63.4665 574.866 60.6912 575.62 58.6012C576.408 56.5112 577.402 54.9351 578.601 53.873C579.8 52.7766 581.085 52.0399 582.456 51.6631C583.826 51.2862 585.111 51.0977 586.31 51.0977C589.291 51.0977 591.587 51.7658 593.197 53.1021C594.841 54.4383 596.024 56.1001 596.743 58.0873C597.463 60.0745 597.891 62.0617 598.028 64.049C598.165 66.0019 598.234 67.6123 598.234 68.88ZM524.025 96.6322C518.44 96.6322 513.541 95.3816 509.327 92.8804C505.112 90.3793 501.823 86.9359 499.459 82.5503C497.129 78.1304 495.964 73.0595 495.964 67.3377C495.964 61.5473 497.163 56.4593 499.562 52.0737C501.96 47.6538 505.267 44.2104 509.481 41.7435C513.695 39.2766 518.543 38.0432 524.025 38.0432C529.61 38.0432 534.51 39.2938 538.724 41.7949C542.972 44.2961 546.279 47.7566 548.643 52.1765C551.007 56.5621 552.189 61.6158 552.189 67.3377C552.189 73.0938 550.99 78.1818 548.592 82.6017C546.227 86.9873 542.921 90.4307 538.673 92.9318C534.458 95.3987 529.576 96.6322 524.025 96.6322ZM524.025 83.5782C528.514 83.5782 531.854 82.0706 534.047 79.0555C536.274 76.0061 537.388 72.1002 537.388 67.3377C537.388 62.4039 536.257 58.4637 533.996 55.5171C531.769 52.5705 528.445 51.0972 524.025 51.0972C520.976 51.0972 518.475 51.7825 516.522 53.153C514.569 54.5235 513.113 56.425 512.153 58.8577C511.228 61.2903 510.766 64.117 510.766 67.3377C510.766 72.3058 511.879 76.2631 514.106 79.2097C516.368 82.122 519.674 83.5782 524.025 83.5782ZM453.374 92.7776C457.485 95.3473 462.419 96.6322 468.175 96.6322C474.616 96.6322 480.03 95.039 484.415 91.8526C488.801 88.6661 491.782 84.1263 493.358 78.2332L479.071 75.2523C478.248 77.9248 477.015 79.9806 475.37 81.4196C473.726 82.8586 471.327 83.5782 468.175 83.5782C463.961 83.5782 460.774 82.0877 458.616 79.1069C456.492 76.0918 455.429 72.1687 455.429 67.3377C455.429 64.2541 455.875 61.4959 456.766 59.0633C457.656 56.5964 459.044 54.6605 460.928 53.2558C462.813 51.8167 465.228 51.0972 468.175 51.0972C470.745 51.0972 473.04 51.9024 475.062 53.5127C477.118 55.1231 478.557 57.3673 479.379 60.2453L493.358 56.545C492.125 50.8231 489.281 46.3176 484.827 43.0284C480.407 39.7049 474.925 38.0432 468.381 38.0432C462.727 38.0432 457.828 39.3109 453.682 41.8463C449.536 44.3818 446.316 47.8594 444.02 52.2793C441.759 56.6992 440.628 61.7186 440.628 67.3377C440.628 72.8882 441.724 77.8734 443.917 82.2933C446.11 86.7132 449.262 90.208 453.374 92.7776ZM417.408 31.8767V19.5422H431.387V31.8767H417.408ZM417.408 95.0912V39.5858H431.387V95.0912H417.408ZM359.571 94.6537L350.441 119.76H363.392L394.743 39.5857H380.763L366.265 77.3551L351.674 39.5857H337.647H337.181H321.201L310.305 56.0317L299.204 39.5857H282.758L302.185 67.03L282.347 95.091H298.793L310.305 78.0283L321.715 95.091H338.161L318.22 67.03L337.351 40.0032L359.571 94.6537ZM239.441 92.8804C243.655 95.3816 248.555 96.6322 254.139 96.6322C259.69 96.6322 264.572 95.3987 268.787 92.9318C273.035 90.4307 276.342 86.9873 278.706 82.6017C281.104 78.1818 282.303 73.0938 282.303 67.3377C282.303 61.6158 281.121 56.5621 278.757 52.1765C276.393 47.7566 273.087 44.2961 268.838 41.7949C264.624 39.2938 259.724 38.0432 254.139 38.0432C248.657 38.0432 243.809 39.2766 239.595 41.7435C235.381 44.2104 232.074 47.6538 229.676 52.0737C227.278 56.4593 226.078 61.5473 226.078 67.3377C226.078 73.0595 227.243 78.1304 229.573 82.5503C231.937 86.9359 235.226 90.3793 239.441 92.8804ZM264.161 79.0555C261.968 82.0706 258.628 83.5782 254.139 83.5782C249.788 83.5782 246.482 82.122 244.22 79.2097C241.993 76.2631 240.88 72.3058 240.88 67.3377C240.88 64.117 241.342 61.2903 242.267 58.8577C243.227 56.425 244.683 54.5235 246.636 53.153C248.589 51.7825 251.09 51.0972 254.139 51.0972C258.559 51.0972 261.883 52.5705 264.11 55.5171C266.371 58.4637 267.502 62.4039 267.502 67.3377C267.502 72.1002 266.388 76.0061 264.161 79.0555ZM190.889 95.091V39.5856H203.224V48.5175C203.684 47.6946 204.198 46.9101 204.766 46.164C205.965 44.588 207.438 43.286 209.186 42.2581C210.522 41.4358 211.978 40.8019 213.554 40.3565C215.13 39.8769 216.758 39.5856 218.437 39.4828C220.115 39.3458 221.794 39.38 223.473 39.5856V52.6397C221.931 52.16 220.133 52.0058 218.077 52.1771C216.055 52.3142 214.222 52.7767 212.578 53.5648C210.933 54.3185 209.545 55.3293 208.415 56.597C207.284 57.8304 206.427 59.3037 205.845 61.0169C205.263 62.6957 204.971 64.5973 204.971 66.7216V95.091H190.889ZM143.81 93.1557C147.411 95.4734 151.831 96.6322 157.07 96.6322C162.175 96.6322 166.646 95.3473 170.484 92.7776C174.321 90.208 177.302 86.7132 179.426 82.2933C181.585 77.8734 182.664 72.8882 182.664 67.3377C182.664 61.6844 181.568 56.6649 179.375 52.2793C177.216 47.8594 174.167 44.3818 170.227 41.8463C166.287 39.3109 161.661 38.0432 156.351 38.0432C151.074 38.0432 146.637 39.328 143.04 41.8977C142.707 42.1356 142.381 42.3813 142.063 42.635V39.585H129.729V119.759H143.81V93.1557ZM142.063 67.3377C142.063 63.9799 142.474 61.0334 143.296 58.4979C144.119 55.9625 145.421 53.9924 147.202 52.5876C149.018 51.1829 151.382 50.4805 154.295 50.4805C157.413 50.4805 159.965 51.2514 161.952 52.7932C163.974 54.3008 165.464 56.3394 166.424 58.9091C167.383 61.4445 167.863 64.2541 167.863 67.3377C167.863 70.4556 167.4 73.2994 166.475 75.8691C165.55 78.4045 164.128 80.426 162.209 81.9335C160.291 83.4411 157.824 84.1949 154.809 84.1949C151.691 84.1949 149.19 83.4925 147.305 82.0877C145.455 80.683 144.119 78.7129 143.296 76.1774C142.474 73.642 142.063 70.6954 142.063 67.3377Z"
              fill="#FF620A"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_45">
              <rect width="667.589" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div className="flex text-orange-500 items-center gap-8">
        <div className="flex gap-6">
          <p className="text-sm font-semibold">Submit Issues or request</p>
          <Link href="https://github.com/proksh/proxy-icons">
            <p className="text-sm font-semibold">Documentation</p>
          </Link>
        </div>
        <div className="flex gap-4">
          <i className="pro-twitter-x-line text-xl" />
          <i className="pro-github-line text-xl" />
        </div>
      </div>
    </header>
  );
}
