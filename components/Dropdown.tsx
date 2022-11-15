import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "react-native";

export type DropdownItem = {
  label: string;
  value: any;
};

type DropdownProps = {
  items: Array<DropdownItem>;
  placeholder: string;
  width: string;
  setOpen: React.Dispatch<React.SetStateValue<Boolean>>;
  onOpen: () => void;
  open: boolean;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  value: any;
};

export default function (props: DropdownProps) {
  const [items, setItems] = useState(props.items);
  return (
    <DropDownPicker
      open={props.open}
      value={props.value}
      items={items}
      setOpen={props.setOpen}
      onOpen={props.onOpen}
      setValue={props.setValue}
      setItems={setItems}
      style={{
        backgroundColor: "transparent",
        borderColor: "white",
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingLeft: 0,
        height: 30,
        minHeight: 0,
        marginTop: 30,
      }}
      textStyle={{
        fontFamily: "AzeretMono_400Regular",
        color: "black",
      }}
      labelStyle={{
        color: "white",
      }}
      containerStyle={{
        width: props.width,
      }}
      placeholderStyle={{
        color: "#AAAAAA",
      }}
      placeholder={props.placeholder}
      ArrowDownIconComponent={() => (
        <Image
          source={require("../assets/chevron-down.png")}
          style={{ width: 14, height: 14 }}
        />
      )}
    />
  );
}
