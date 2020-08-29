const { React } = require("powercord/webpack");
const { Text } = require("powercord/components");
const { Confirm } = require("powercord/components/modal");
const { close } = require("powercord/modal");

module.exports = () => (
  <Confirm
    red={true}
    header="Relaunch Discord?"
    confirmText="Relaunch"
    cancelText="Cancel"
    onCancel={close}
    onConfirm={() => {
      DiscordNative.app.relaunch();
      close();
    }}
  >
    <Text color={Text.Colors.PRIMARY} size={Text.Colors.MEDIUM}>
      Are you sure you want to relaunch Discord?
    </Text>
  </Confirm>
);
