const { React, getModuleByDisplayName } = require("powercord/webpack");
const { Plugin } = require("powercord/entities");

const Settings = require("./Settings.jsx");

const { open } = require("powercord/modal");
const ConfirmModal = require("./ConfirmModal");

module.exports = class Relaunch extends Plugin {
  async startPlugin() {
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
    if (event.key == "F4") {
      open(() => React.createElement(ConfirmModal));
    }
  }
};
