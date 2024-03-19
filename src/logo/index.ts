import optimizeSvg from './optimizeSvg';
import optimizeWebp from './optimizeWebp';

const svgList = ['logo-flat.svg', 'logo-high-contrast.svg', 'logo-text.svg'];

const webpList = ['logo-3d.png', 'logo-squared.png'];

optimizeSvg(svgList);
optimizeWebp(webpList);
