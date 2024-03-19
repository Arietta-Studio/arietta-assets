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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 179 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M121.957 3.355l6.915 18.325h-3.509l-1.625-4.548H116.5l-1.562 4.548h-3.485l6.916-18.325h3.589zm-1.806 3.4h-.09l-2.717 7.718h5.508l-2.7-7.719zm10.302 1.788h10.517v1.24l-6.904 9.444h6.943v2.453h-11.043v-1.47l6.802-9.213h-6.315V8.543zm24.2 0V21.68h-3.127v-1.724h-.05a4.185 4.185 0 01-1.646 1.398c-.689.337-1.459.506-2.313.506-1.53 0-2.692-.433-3.49-1.298-.799-.864-1.2-2.208-1.2-4.032V8.543h3.141v7.617c0 1.108.219 1.94.66 2.498.439.558 1.102.837 1.99.837.88 0 1.585-.308 2.115-.926.53-.617.793-1.426.793-2.421V8.543h3.127zm8.908-.217c.247 0 .469.017.666.051.196.034.364.076.5.128v3.131c-.164-.12-.398-.232-.71-.338-.312-.107-.69-.16-1.133-.16-.761 0-1.405.32-1.93.958-.525.64-.788 1.624-.788 2.952v6.632h-3.1V8.543h3.1v2.07h.052c.28-.715.71-1.275 1.28-1.68.573-.404 1.26-.607 2.063-.607zm7.673-.05c1.82 0 3.236.554 4.25 1.667 1.01 1.111 1.516 2.648 1.516 4.607v1.494h-9.018c.138 1.32.562 2.243 1.276 2.768.71.524 1.633.785 2.759.785.743 0 1.453-.113 2.126-.339a6.882 6.882 0 001.794-.887v2.544c-.512.323-1.182.585-2.011.784-.829.201-1.712.301-2.653.301-2.007 0-3.566-.592-4.68-1.776-1.116-1.185-1.672-2.832-1.672-4.945 0-2.036.595-3.714 1.787-5.03 1.19-1.316 2.7-1.974 4.526-1.974zm0 2.363c-.741 0-1.407.267-1.996.8-.59.531-.983 1.312-1.18 2.343h5.893c0-1.021-.236-1.8-.71-2.338-.474-.536-1.142-.805-2.007-.805zM21.881 3.355V21.68h-3.19V7.316h-.051l-5.7 14.364h-2.114L4.984 7.316h-.038V21.68H2V3.355h4.573L11.85 16.94h.076L17.5 3.355h4.381zm2.667 1.393c0-.511.186-.939.558-1.284a1.876 1.876 0 011.325-.518c.546 0 1 .177 1.358.53.359.354.538.778.538 1.272 0 .502-.184.925-.55 1.264-.368.342-.816.512-1.346.512-.529 0-.976-.172-1.338-.517a1.668 1.668 0 01-.545-1.259zm.32 16.932h3.1V8.543h-3.1V21.68zm12.503-2.25c.461 0 .97-.104 1.524-.318a6.414 6.414 0 001.538-.844v2.876a6.291 6.291 0 01-1.685.639A9.22 9.22 0 0136.68 22c-1.94 0-3.515-.611-4.728-1.834-1.212-1.221-1.819-2.783-1.819-4.683 0-2.113.62-3.853 1.858-5.22 1.238-1.368 2.993-2.051 5.265-2.051.58 0 1.168.074 1.761.223.594.148 1.065.32 1.416.518v2.964a6.39 6.39 0 00-1.468-.812 4.236 4.236 0 00-1.53-.287c-1.22 0-2.207.396-2.96 1.189-.75.792-1.126 1.862-1.126 3.207 0 1.329.36 2.365 1.082 3.105.722.742 1.701 1.112 2.94 1.112zM49.258 8.327c.248 0 .471.017.667.051.195.034.363.076.5.128v3.131c-.163-.12-.4-.232-.711-.338-.313-.108-.69-.16-1.134-.16-.76 0-1.403.32-1.928.958-.525.64-.787 1.624-.787 2.952v6.632h-3.1V8.544h3.1v2.07h.05c.282-.716.709-1.276 1.281-1.681.572-.404 1.26-.607 2.062-.607zm1.335 6.977c0-2.172.614-3.893 1.843-5.162 1.231-1.27 2.939-1.904 5.124-1.904 2.06 0 3.666.611 4.824 1.834 1.157 1.223 1.735 2.873 1.735 4.952 0 2.13-.614 3.825-1.844 5.085C61.045 21.371 59.371 22 57.253 22c-2.041 0-3.661-.598-4.86-1.795-1.201-1.197-1.8-2.83-1.8-4.902zm3.228-.101c0 1.37.31 2.42.935 3.143.622.724 1.515 1.086 2.677 1.086 1.128 0 1.985-.362 2.574-1.086.59-.723.884-1.797.884-3.22 0-1.415-.305-2.482-.915-3.2-.611-.721-1.468-1.082-2.568-1.082-1.137 0-2.019.377-2.646 1.132-.628.754-.941 1.829-.941 3.227zm14.91-3.208c0 .443.141.79.422 1.042.283.25.905.568 1.871.951 1.238.495 2.108 1.051 2.607 1.67.5.615.749 1.364.749 2.24 0 1.237-.476 2.23-1.428 2.979-.951.75-2.24 1.124-3.862 1.124a9.273 9.273 0 01-1.813-.198c-.662-.132-1.223-.3-1.685-.506v-3.04c.564.391 1.17.703 1.82.933.649.23 1.238.344 1.768.344.699 0 1.216-.097 1.55-.294.331-.195.499-.523.499-.982 0-.427-.172-.787-.519-1.081-.346-.294-1-.633-1.966-1.016-1.144-.477-1.956-1.014-2.434-1.61-.477-.596-.718-1.354-.718-2.275 0-1.185.473-2.158 1.416-2.92.944-.763 2.167-1.143 3.67-1.143.46 0 .978.05 1.55.152.573.103 1.051.235 1.435.396v2.94a6.63 6.63 0 00-1.435-.703 4.797 4.797 0 00-1.626-.294c-.59 0-1.049.115-1.378.345-.328.23-.494.546-.494.946zm6.982 3.31c0-2.173.614-3.894 1.844-5.163 1.23-1.27 2.937-1.904 5.124-1.904 2.059 0 3.666.611 4.824 1.834 1.157 1.223 1.735 2.873 1.735 4.952 0 2.13-.616 3.825-1.844 5.085C86.166 21.371 84.491 22 82.373 22c-2.04 0-3.66-.598-4.861-1.795-1.2-1.197-1.799-2.83-1.799-4.902zm3.227-.102c0 1.37.313 2.42.935 3.143.625.724 1.517 1.086 2.677 1.086 1.128 0 1.987-.362 2.576-1.086.588-.723.883-1.797.883-3.22 0-1.415-.304-2.482-.916-3.2-.609-.721-1.467-1.082-2.567-1.082-1.136 0-2.018.377-2.646 1.132-.628.754-.942 1.829-.942 3.227zm20.584-4.128h-4.618V21.68H91.77V11.074h-2.203v-2.53h2.203V6.716c0-1.38.45-2.511 1.352-3.393C94.021 2.44 95.177 2 96.586 2c.376 0 .708.02.998.058.292.038.548.095.77.172v2.672a3.233 3.233 0 00-.54-.218 2.792 2.792 0 00-.883-.128c-.648 0-1.148.202-1.498.607-.35.405-.527 1.004-.527 1.795v1.586h4.618V5.592l3.113-.946v3.898h3.138v2.53h-3.138v6.146c0 .81.147 1.38.442 1.712.294.334.758.499 1.391.499.178 0 .394-.042.647-.128.25-.085.47-.186.658-.306v2.556c-.196.112-.523.213-.98.307-.457.093-.906.14-1.35.14-1.308 0-2.287-.347-2.942-1.043-.653-.692-.98-1.739-.98-3.136v-6.747z"></path>
    </svg>
  );
});

export default Icon;