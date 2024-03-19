import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M20.456 9.401c-1.127 0-2.109.77-2.436 1.832h-5.198v-3.92h1.672l1.636-.916c.4.294.909.44 1.418.44a2.562 2.562 0 002.544-2.564 2.539 2.539 0 00-2.544-2.564 2.539 2.539 0 00-2.545 2.564c0 .33.073.66.182.952l-1.054.623h-1.272V1.745h-.037c-.472-.366-1.054-.586-1.635-.696h-.073a4.178 4.178 0 00-2.108.22c-.146.037-.291.11-.437.183h-.036c-.036.037-.073.037-.109.074-.618.366-1.09.879-1.454 1.465 0 .036-.036.073-.036.073l-.11.22c0 .037-.036.037-.036.073v.037H6.57c-1.054 0-2.072.44-2.799 1.172-.763.733-1.163 1.758-1.163 2.82 0 .257.037.513.073.77-.473.33-.872.769-1.163 1.282-.291.513-.436 1.062-.51 1.648a3.976 3.976 0 00.255 1.722c.218.55.546 1.062.945 1.465a4.498 4.498 0 00-.4 2.051c0 .696.182 1.392.51 2.052.327.659.763 1.172 1.308 1.611.473.367.981.623 1.563.806v-.036a4.58 4.58 0 001.745.22h.036c0 .036.036.036.036.036.328.623.837 1.099 1.454 1.465.037.037.073.037.11.073h.036c.145.074.29.147.436.184.509.22 1.09.293 1.636.256.145 0 .29-.037.472-.037h.037a4.032 4.032 0 001.635-.696V17.9h1.273l1.126.623a2.77 2.77 0 00-.181.952c0 1.392 1.126 2.565 2.544 2.565a2.539 2.539 0 002.544-2.565 2.539 2.539 0 00-2.544-2.564c-.545 0-1.018.184-1.418.44l-1.672-.916h-1.672V12.698h5.198c.327 1.062 1.272 1.831 2.436 1.831A2.562 2.562 0 0023 11.965a2.539 2.539 0 00-2.544-2.564zm-2.872-6.19c.582 0 1.09.476 1.09 1.099 0 .622-.472 1.098-1.09 1.098-.618 0-1.09-.476-1.09-1.098 0-.623.508-1.1 1.09-1.1zm0 15.165c.582 0 1.09.476 1.09 1.098 0 .623-.472 1.1-1.09 1.1-.618 0-1.09-.477-1.09-1.1 0-.622.508-1.098 1.09-1.098zm-6.216 2.857a.824.824 0 01-.4.11c-.072 0-.145.036-.181.036h-.073a2.1 2.1 0 01-.945-.11c-.363-.11-.69-.33-.981-.622-.255-.293-.473-.623-.582-.99l-.109-.549v-.256c0-.183.036-.367.109-.55.036-.073.036-.146.073-.256.036-.11.109-.22.181-.33 0-.036.037-.036.037-.073.036-.037.036-.073.072-.11.037-.037.037-.073.073-.11 0 0 0-.036.037-.036l.218-.22-.982-1.282c-.472.403-.836.879-1.054 1.428-.073.147-.145.33-.182.477v.036c-.036.073-.036.147-.036.22-.109.403-.145.842-.109 1.245-.11 0-.254 0-.364-.036-.8-.147-1.526-.55-1.999-1.172-.509-.623-.727-1.429-.654-2.235.036-.293.109-.586.218-.879l.11-.22c.035-.073.072-.146.108-.183 0 0 0-.037.037-.037.145-.256.327-.476.545-.696.581-.549 1.381-.842 2.18-.842.255 0 .51.037.764.11v-1.649c-.254-.036-.509-.073-.763-.073-.655 0-1.273.147-1.89.403-.255.11-.473.22-.691.366-.218.147-.4.293-.618.477-.109.073-.182.183-.29.293a2.917 2.917 0 01-.473-.953 2.613 2.613 0 010-1.062c.072-.366.218-.696.472-.952.218-.293.51-.513.836-.66l.655-.33-.255-.695a2.457 2.457 0 01-.145-1.136c.036-.366.181-.77.4-1.062.218-.33.508-.586.872-.77.327-.183.727-.292 1.09-.256.182 0 .364.037.546.073.363.074.654.257.945.477.29.22.509.512.654.842l1.49-.55A4.053 4.053 0 008.788 4.09a1.268 1.268 0 01-.328-.22c.146-.256.364-.513.582-.696.29-.256.654-.403 1.054-.476.327-.073.618-.037.945 0 .146.036.255.073.4.11v18.425h-.073zm9.088-8.169c-.582 0-1.09-.476-1.09-1.099 0-.586.472-1.099 1.09-1.099.618 0 1.09.477 1.09 1.1 0 .585-.472 1.098-1.09 1.098z"></path>
    </svg>
  );
});

export default Icon;
