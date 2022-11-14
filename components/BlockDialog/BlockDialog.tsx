import Dialog from "react-native-dialog";

type BlockDialogProps = {
  visible: boolean;
  onDismiss: () => void;
  onBlock: () => void;
};

const BlockDialog = ({ visible, onDismiss, onBlock }: BlockDialogProps) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Block user</Dialog.Title>
      <Dialog.Description>
        Are you sure you want to block this user?
      </Dialog.Description>
      <Dialog.Button label="Cancel" onPress={onDismiss} />
      <Dialog.Button label="Block" onPress={onBlock} />
    </Dialog.Container>
  );
};

export default BlockDialog;
