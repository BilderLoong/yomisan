browser.browserAction.onClicked.addListener(() => {
  const creatingTab = browser.tabs.create({
    active: true,
    url: `setting.html`,
  });
  creatingTab.then(onCreated, onError);
});

function onCreated(tab) {
  console.log(`success to open tab ${tab.id}`);
}

function onError(e) {
  console.log(`creat new tab failed with error:${e}`);
}
