window.hjSiteSettings = window.hjSiteSettings || {
  "site_id": 2834198,
  "r": 1.0,
  "rec_value": 1.0,
  "state_change_listen_mode": "automatic",
  "record": true,
  "continuous_capture_enabled": true,
  "recording_capture_keystrokes": true,
  "anonymize_digits": true,
  "anonymize_emails": true,
  "suppress_all": false,
  "suppress_text": false,
  "suppress_location": false,
  "user_attributes_enabled": true,
  "legal_name": null,
  "privacy_policy_url": null,
  "deferred_page_contents": [{
      "id": 27976936,
      "targeting": [{
              "component": "url",
              "match_operation": "simple",
              "pattern": "https://robin-leach.github.io/",
              "negate": false
          },
          {
              "component": "device",
              "match_operation": "exact",
              "pattern": "tablet",
              "negate": false
          }
      ]
  }, {
      "id": 27976935,
      "targeting": [{
          "component": "url",
          "match_operation": "simple",
          "pattern": "https://robin-leach.github.io/",
          "negate": false
      }, {
          "component": "device",
          "match_operation": "exact",
          "pattern": "phone",
          "negate": false
      }]
  }],
  "record_targeting_rules": [],
  "feedback_widgets": [],
  "heatmaps": [{
      "id": 8863643,
      "created_epoch_time": 1645012815,
      "targeting": [{
          "component": "url",
          "match_operation": "simple",
          "pattern": "https://robin-leach.github.io/",
          "negate": false
      }],
      "selector_version": 2,
      "capture_type": "SNAPSHOT_1000"
  }],
  "polls": [],
  "integrations": {
      "optimizely": {
          "tag_recordings": false
      },
      "google_optimize": {
          "tag_recordings": true
      }
  },
  "features": ["feedback.widgetV2", "heatmap.continuous_capture", "settings.billing_v2", "survey.impressions"]
};

! function(e) {
  var t = {};

  function n(o) {
      if (t[o]) return t[o].exports;
      var a = t[o] = {
          i: o,
          l: !1,
          exports: {}
      };
      return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: o
      })
  }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var a in e) n.d(o, a, function(t) {
              return e[t]
          }.bind(null, a));
      return o
  }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 335)
}({
  335: function(e, t) {
      window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
          var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
              a = new RegExp(o, "i"),
              i = window.navigator || {
                  userAgent: "unknown"
              },
              r = i.userAgent ? i.userAgent : "unknown";
          if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
          else {
              var s = function(e, t, n) {
                  window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
              };
              s(0, 0, n);
              var d, l, p, _, u = window.document,
                  c = u.head || u.getElementsByTagName("head")[0];
              u.addEventListener && (
                hj.scriptDomain = e,
                (d = u.createElement("script")).async = 1,
                d.src = hj.scriptDomain + t,
                d.charset = "utf-8",
                c.appendChild(d), _ = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"],
                (l = u.createElement("style")).type = "text/css",
                l.styleSheet ? l.styleSheet.cssText = _.join("") : l.appendChild(u.createTextNode(_.join(""))),
                c.appendChild(l),
                (p = u.createElement("iframe")).style.cssText = _[1],
                p.name = "_hjRemoteVarsFrame", p.title = "_hjRemoteVarsFrame",
                p.id = "_hjRemoteVarsFrame",
                p.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-acca23410e696f2ca3087d947271c3d0.html",
                p.onload = function() {
                      s.varsLoaded = !0,
                        "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                  },
                s.varsJar = p,
                "interactive" === u.readyState || "complete" === u.readyState || "loaded" === u.readyState ? h() : u.addEventListener("DOMContentLoaded", h),
                s.revision = "d8b1d1c562f5",
                window.hjBootstrap = s
              )
          }

          function h() {
              setTimeout(function() {
                  u.body.appendChild(p)
              }, 50)
          }
      }, window.hjBootstrap("https://script.hotjar.com/", "modules.855de5fca5328f4d913a.js", "2834198"), window.hjLazyModules = window.hjLazyModules || {
          SURVEY_V2: {
              js: "survey-v2.2d999254a7f799f6364b.js"
          },
          SURVEY_BOOTSTRAPPER: {
              js: "survey-bootstrapper.e215bcce6b73467dd5a1.js"
          },
          SURVEY_ISOLATED: {
              js: "survey-isolated.511f0555b317a26e4f66.js"
          },
          HEATMAP_SCREENSHOTTER: {
              js: "heatmap-screenshotter.06800c79052d97a7ba6c.js"
          },
          HEATMAP_VIEWER: {
              js: "heatmap-viewer.3208f7f40b35f2f7551b.js"
          },
          SURVEY_INVITATION: {
              js: "survey-invitation.775cde78dc99c4277180.js"
          },
          NOTIFICATION: {
              js: "notification.0489f591a99ee0f19e9a.js"
          },
          INCOMING_FEEDBACK: {
              js: "incoming-feedback.d3d1b7b54a489b2e0a1a.js"
          },
          PREACT_INCOMING_FEEDBACK: {
              js: "preact-incoming-feedback.a180a80188966705e605.js"
          },
          SENTRY: {
              js: "sentry.6d4f51709055192a2c9d.js"
          }
      }
  }
});