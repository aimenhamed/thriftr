// Generated from https://react-svgr.com/

import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={42}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h42v42H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.02)" />
      </Pattern>
      <Image
        id="b"
        width={42}
        height={42}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRoge3ZwQ3CMBQE0YgiSESLUG5EoJrhELsA4PDX1rwKduR/87JIkjQYYAPu1Tv+0iIOTo/qPT8BVmBvES/gVr3pa0akMCKFESmMSGFECiNSzBJxBZ4t4gC26k2X6gHl2qv003oPeVqdMamMSWVMKmNSGZPKmFSzxYz/rdAxw0ePJGkqHyUVLe5k4IgIAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default SvgComponent;
