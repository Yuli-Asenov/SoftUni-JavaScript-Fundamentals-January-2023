function browserHistory(infoObj, actions) {
  for (let action of actions) {
    if (action === "Clear History and Cache") {
      infoObj["Open Tabs"] = [];
      infoObj["Recently Closed"] = [];
      infoObj["Browser Logs"] = [];
    }

    let [command, tab] = action.split(" ");
    switch (command) {
      case "Close":
        if (infoObj["Open Tabs"].includes(tab)) {
          let index = infoObj["Open Tabs"].indexOf(tab);

          infoObj["Recently Closed"].push(infoObj["Open Tabs"].splice(index, 1));

          infoObj["Browser Logs"].push(`${command} ${tab}`);
        }
        break;

      case "Open":
        infoObj["Open Tabs"].push(tab);
        infoObj["Browser Logs"].push(`${command} ${tab}`);
        break;
    }
  }
  console.log(infoObj["Browser Name"]);
  console.log(`Open Tabs: ${infoObj["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${infoObj["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${infoObj["Browser Logs"].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "GoogleChrome",
    OpenTabs: ["Facebook", "YouTube", "GoogleTranslate"],
    RecentlyClosed: ["Yahoo", "Gmail"],
    "Browser Logs": [
      "OpenYouTube",
      "Open Yahoo",
      "Open GoogleTranslate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "OpenFacebook",
    ],
  },
  ["Close Facebook", "OpenStackOverFlow", "Open Google"]
);
