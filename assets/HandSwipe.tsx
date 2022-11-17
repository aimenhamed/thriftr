import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={52}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h52v52H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        id="b"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent;
