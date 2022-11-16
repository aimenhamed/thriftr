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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAHwUlEQVR4nO2da6gWRRjHn9XU6nj0lFJqSRbkpSASAiG6fwkx09AuH8VACL8GQR8qozKKrIysPtXXyqIoiG5e8pa3Sk2tMOuoVNpdj2Wp59eH2ROvzzu77+6+e5vX+cGBs+/Mzjyz/52d2dlnZkQ8Ho/H48lGULUBGqBbRGaIyE0icqWITBCRnjD4DxH5TkS2icgKEXk3CIK+KuzseIAxwPNAH8npC885v2r7OwZgGPAQcCSFEJojYRrDqi6P0wCjgVVtCKFZD4ypulxOAlwO9EZc2F7gWeBmYBLQFf5NCn9b2uLcy6sun1Ngasa3lou5H1gADE6QxiDgdmBvhCi+XUkCps1YZ7mIy4GuDOkNB960pLcW36a0BtP4ap4CMnfBgQBYYkn3sTxt7zgwXVvdm1puEwPTxjwNfInp3vaF/y8BLrPEH2SpKf8Al5RTOgfBvDM0sk8/poChwHPACcsdP8AJTKM/RJ07HDig4r5UbikdAeim+aVvnoozFPgwRgjNBxZR7lZx+oDh5ZbWAYC71IXqRfWmMDUjLc+oNAZjal4jd5Rb2uwMKjGvm9TxW0EQnBw4wLw73KPi7BKRWSIyIvybLSK7VZyFwJSBgzDNt1vk7QE2qrv2ZhX+tArfCYywpDMS2K3iPqXiTFfhG4oun3MAP6uLNFGF71Ths2LSuk3F3aHCJ6nwg0WVy1kwXdBGulX44bhwFXeEintYhXer8GNFlStvymxD+luEnyJAEARHoiIGQXBY/aTF0+U6KY5QpiC/q+MLCszrQnX8W4F55UqZguxTxxMKzOsidby/wLxypUxBtqjjGQXmdYs63lxgXm6CGSpv5AdgUEP4KSRIzxof82L4owqeU1S5nAU4m+aBxXkN4XkJMl8F/QmcVVS5nAZ4QV2sn4CRYVjbggA9wEEV9HzR5XIWYDxwTF2w5ZjHTFuChGm8oX47Bowvo2zOAiyyXMwXcxDkJctvi8ook9MAQ4AtlovXriCazaiheU8EwDjg+wIFOYB/VKUDmEK0K087gvTSMBzvSUFYU/SwfDuCfAqMLcP2jgU4A7g/B0HuB84ow+YiqY33uxYhCIJY29LGd4Uyx7I8CfCC1AwvSM3oGEGAC4HFGO/Gv4DfMC+HTwBFfnvpTHLoZf0b0RUG4+m4iIbhfk8LchAkCW8MiIIZ6Hwc2IbxbjwK7MLMPWnyHT7tKEkQgAeA+2gedW7kBMap+/QdC8tJkJ3ArRg3oG5gFuauz8q7dMDLZiZyECSNp2MaFhdT4pqTgyBpPB0bRWxVo44DFwNTMV88v8L04mLnqzhPDoKk8XQcECNpjfoG6I8QFSLmqzhNu4KkjU+2GtWKpvkqzlKBIGlrVFKeiUrXKcoWJG38kKRtjvsfyBwQJPN8FSfJcMEaJ3f2JojfmzK+JvN8FSfJIMhs4BfgV2BmgvhzMAOOSeNrMs9XKQXgCmAZpkv4N2Yo4luMf9RVGdJLJUjRZLhBqrEfM3V5GXDSchcN0A+8QgqfWi9IBkIxPooRQrMJODdh2nUTpHFRm70J4lciyNIUYgywBTgnQdp1E2Q6puNwAJieIH659gOTaV7uYg9wJ8a/alz4v23ZpS1AT4v0ayVIWqoQ5AmLGKMt8UYBWy2ibIoTxQuSPkN9ke+MiXsOdofqjYTzQSzneEFSZnhI5RnrsomZPGNzE92KpU3xgqTP8CeV57gE54zE+Ntqmhp6L0j6DDepPO9KeF6P5VwwK4iOaIjnBUmZ4SMqzz3AqITnRj2+1hEOSXhB0mc4gWZPjc9TiDIS2BAlihckW6aPWi6otZGOOD9KlDVekGyZDgbesVzQRG/jYRpRonhBMmY8NEKUNI+vLlosMV50OfKmUvtjRPmM5IOJsaIUXYa8qdx+zArVeYiy0guSnxFnYVxfNLHjViqNbsyy4I0cL9r2vKmFIKEheYmyvuHcV4u2O29qI0hoTB6idAELgXuBM4u2OW9qJUho0DCMt7hmKwnbFJepnSAi/9cU21LhHS9KLQURaSlKopdHF6mtICKxoiR+o3eNWgsi8r8oNg+VjhSl9oKIiGDWWTwtRHFCEJHTQxSaXUnrvbR5KIptiOSUr4auQvPi/4eqtqklRI9brXNdFOBGXfuzplXaygZBEBwVs+L0KhV0tYi8R4x3uQNcq471pjP1JXx8fdxJjy/MCHcjC6q2KRXh42u1RZS1rtUUYCKnztDtB/RmAPUnrCkrItoUZ0QBXlf2r67apsxg9h38xCLKGiJcTusEMI3m+etzq7arLWJE+YIarzCKcSrfo2zeTicsARUjyn7guqrt02BW59aP237g+qpty41QFFubchyzUlzqnaSLIKwZtl7i0qptyx3MR67XLIUFs3vnfGBohfZNszymwHREOnOrcMyuzw8QvTnxfuBB4NISbZoY3ii2BWh2kOPHt9ouPgzcICIvS/zmYbtEZKWYPaa+FpFeEemL23IvQb5dIjJeRMaKeQOfJSJTxX6t1ovIzCAInNkFri0w31QexsyDrxP9mAmwnfmYagUwFniS5t1Aq2A7ndSbagfMd4d5mM/Dx0sUoR/TLZ9Lwe8ZtW1DWoHZtP4aMaPFk0VkooicJyLDpXkr1jT8KyKHxbRHu0VkjYi8HwRBywVrPB6Px+Opkv8ApylqcERfdGoAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
)

export default SvgComponent
