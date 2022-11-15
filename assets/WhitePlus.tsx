import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={53}
    height={53}
    fill="none"
    {...props}
  >
    <Path
      d="M26.5 11.042v30.916M11.042 26.5h30.916"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgComponent
