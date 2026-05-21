// Disable heavy telemetry, data collection, and tracking scripts
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("browser.ping-centre.telemetry", false);

// Speed up page rendering pipelines
pref("network.http.max-connections", 150);
pref("network.http.max-persistent-connections-per-server", 10);

// Disable pocket extensions and top-sites advertising bloat on home screen
pref("extensions.pocket.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
