import { ReactElement } from "react"

export type Options = {
  opacity: number
  blur: number
  crop?: number[]
  enableCollisions: boolean
  enableSizeChange: true,
  parentElement?: ReactElement,
  fps: number,
  fillStyle: string, // hex color
  gravityThreshold: number,
  gravityAngle: number,
  gravityAngleVariance: number,
  reflectionScaledownFactor: number,
  reflectionDropMappingWidth: number,
  reflectionDropMappingHeight: number,
  width?: number,
  height?: number,
  position: 'absolute' | 'flex',
  top?: string // + 'px',
  left?: string  // + 'px',
}

export const defaults: Options = {
  opacity: 1,
  blur: 10,
  // crop: [0, 0, this.img.naturalWidth, this.img.naturalHeight],
  enableSizeChange: true,
  // parentElement: sourceParent,
  fps: 24,
  fillStyle: '#8ED6FF',
  enableCollisions: true,
  gravityThreshold: 3,
  gravityAngle: Math.PI / 2,
  gravityAngleVariance: 0,
  reflectionScaledownFactor: 5,
  reflectionDropMappingWidth: 200,
  reflectionDropMappingHeight: 200,
  // width: sourceParent.clientWidth,
  // height: sourceParent.clientHeight,
  position: 'absolute',
  // top: parentOffset.top + 'px',
  // left: parentOffset.left + 'px',
}

/**
 * Create the main canvas over a given element
 * @returns HTMLElement the canvas
 */
export function prepareCanvas(props: { position: 'absolute', top: string, left: string, width: number, height: number }) {
  var canvas = document.createElement('canvas');
  var { position, top, left, width, height } = props
  canvas.style.position = position;
  canvas.style.top = top;
  canvas.style.left = left;
  canvas.width = width;
  canvas.height = height;
  canvas.style.zIndex = '99';

  // if (this.imgSource) {
  //   this.options.parentElement.parentNode.insertBefore(canvas, this.imgSource);

  //   // Set z-index to show canvas on top of img/element
  //   this.imgSource.style.zIndex = 100;
  //   this.imgSource.style.position = position;
  //   this.imgSource.style.top = top;
  //   this.imgSource.style.left = left;
  //   this.imgSource.style.width = width;
  //   this.imgSource.style.height = height;
  //   this.imgSource.style.background = 'none';
  //   this.imgSource.style.width = width + 'px';
  // } else {
  //   this.options.parentElement.appendChild(canvas);
  // }

  // this.options.parentElement.parentNode.style.height =
  //   this.options.height + 'px';

  // if (this.options.enableSizeChange) {
  //   this.setResizeHandler();
  // }
  return canvas;
};


const RainyDay = (props: { options: Options }) => {
  const { options } = props


  return <></>
}

export default RainyDay