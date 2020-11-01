import React, { Component } from "react";

export default class NotSupport extends Component {
  render() {
    return (
      <div>
        {alert("Please rotate your device to lanscape mode and then refresh")}
      </div>
    );
  }
}
