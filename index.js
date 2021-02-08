const { React } = require("powercord/webpack");
const { Plugin } = require("powercord/entities");
const { open } = require("powercord/modal");
const Settings = require("./components/Settings");
const ConfirmModal = require("./components/ConfirmModal");
let _this

module.exports = class Relaunch extends Plugin {
  async startPlugin() {
    _this = this
    powercord.api.settings.registerSettings("relaunch", {
      category: this.entityID,
      label: "Relaunch",
      render: Settings,
    });
    document.body.addEventListener("keyup", this.keyup);
  }

  pluginWillUnload() {
    powercord.api.settings.unregisterSettings("relaunch");
    document.body.removeEventListener("keyup", this.keyup);
  }

  keyup(event) {
    if (event.key.toUpperCase() === _this.settings.get("relaunchBind", "F4")) {
      open(() => React.createElement(ConfirmModal));
    }
  }
};
