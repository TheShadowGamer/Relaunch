const { React } = require("powercord/webpack");
const { ButtonItem } = require("powercord/components/settings");
const { Button, Card, Text, Divider } = require("powercord/components");
const { open } = require("powercord/modal");
const ConfirmModal = require("./ConfirmModal");
const KeybindRecorder = require('./KeybindRecorder');

module.exports = class Settings extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { getSetting, updateSetting } = this.props;
    return (
      <div>
        <Card style={{ padding: "18px" }}>
          <Text>
            Press <b>{getSetting("relaunchBind", "F4")}</b> to relaunch Discord, or press the button below.
          </Text>
        </Card>
        <Divider />
        <div style={{ marginBottom: 20 }} />
        <ButtonItem
          onClick={() => open(() => React.createElement(ConfirmModal))}
          note="Completely close Discord and relaunch it."
          button="Relaunch"
          color={Button.Colors.RED}
        >
          Relaunch Discord
        </ButtonItem>
        <KeybindRecorder value={getSetting("relaunchBind", "F4")} 
          onChange={(e) => {
              this.setState({value: e})
              setTimeout(() => updateSetting("relaunchBind", e), 100)
          }}
          onReset={() => {
              this.setState({value: "F4"})
              updateSetting("relaunchBind", "F4")
          }}
          >
            Relaunch Discord Keybind
        </KeybindRecorder>
        <div style={{ marginBottom: 20 }} />
      </div>
    );
  }
};
