import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={56}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M44.847 1.39 54.459 11l-9.61 9.61M54.188 11H.894"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
