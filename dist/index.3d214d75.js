// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3smKr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _frJson = require("./assets/langs/fr.json");
var _frJsonDefault = parcelHelpers.interopDefault(_frJson);
var _enJson = require("./assets/langs/en.json");
var _enJsonDefault = parcelHelpers.interopDefault(_enJson);
var _esJson = require("./assets/langs/es.json");
var _esJsonDefault = parcelHelpers.interopDefault(_esJson);
var _browser = require("@emailjs/browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _analytics = require("@vercel/analytics");
const carrousel_container = document.getElementById("project-carrousel");
const slide = document.querySelector(".project");
const numSlides = document.querySelectorAll(".project").length;
const nextBtn = document.getElementById("arrow-right");
const prevBtn = document.getElementById("arrow-left");
const redirectButton = document.querySelectorAll(".project-button");
const coursesTab = document.getElementById("tab-courses");
const nextActif = new URL(require("eefe49df6a87961e"));
const prevActif = new URL(require("e0b133af2d47c1ed"));
const nextHover = new URL(require("5ddd7c86437919a2"));
const prevHover = new URL(require("f077552adf6dd1a2"));
const sun = document.getElementById("sun");
const langList = [
    "FR",
    "EN",
    "ES"
];
const langSelect = document.getElementsByClassName("languages");
let langChange = document.getElementsByClassName("can-choose");
const alltime = document.getElementById("all-time-code");
const dailytime = document.getElementById("daily-code-time");
const send_button = document.getElementById("send-message");
const scrollType = {
    "profile": 0,
    "skills": 1100,
    "projects": 1750,
    "software": 2400,
    "contact": 5000
};
(0, _analytics.inject)();
function pxToVh(px) {
    return px / 1920 * 100;
}
function timeToString(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs % 3600 / 60);
    return `${hours}h ${minutes}m`;
}
function vhToPx(vh, width) {
    return vh / 100 * width;
}
function isGood(carrousel, slide) {
    if (slide % 10 !== 0) {
        for(let i = 1; i < 10; i++)if ((slide - i) % 10 === 0) {
            slide -= i;
            break;
        }
    }
    if (carrousel % 10 !== 0) {
        for(let i = 1; i < 10; i++)if ((carrousel - i) % 10 === 0) {
            carrousel -= i;
            break;
        }
    }
    return carrousel % slide !== 0;
}
nextBtn.addEventListener("click", ()=>{
    let slideWith = slide.clientWidth;
    if (isGood(carrousel_container.scrollLeft, slideWith)) return;
    carrousel_container.scrollLeft += slideWith;
    if (carrousel_container.scrollLeft + slideWith >= (numSlides - 1) * slideWith) {
        nextBtn.src = nextActif;
        prevBtn.src = prevHover;
    } else {
        nextBtn.src = nextHover;
        prevBtn.src = prevHover;
    }
});
prevBtn.addEventListener("click", ()=>{
    let slideWith = slide.clientWidth;
    if (isGood(carrousel_container.scrollLeft, slideWith)) return;
    carrousel_container.scrollLeft -= slideWith;
    if (carrousel_container.scrollLeft - slideWith <= 0) {
        nextBtn.src = nextHover;
        prevBtn.src = prevActif;
    } else {
        nextBtn.src = nextHover;
        prevBtn.src = prevHover;
    }
});
window.addEventListener("resize", ()=>{
    carrousel_container.scrollLeft = 0;
    prevBtn.src = prevActif;
    nextBtn.src = nextHover;
});
redirectButton.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let url = button.getAttribute("redirect");
        window.open(url, "_blank");
    });
});
Object.keys(scrollType).forEach((key)=>{
    const element = document.getElementById("tab-" + key);
    element.addEventListener("click", ()=>{
        let scrollSize = scrollType[key];
        scrollSize = vhToPx(pxToVh(scrollSize), window.innerWidth);
        window.scrollTo({
            top: scrollSize,
            behavior: "smooth"
        });
    });
});
window.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("data-theme");
    let lang = localStorage.getItem("lang");
    if (lang) lang.toUpperCase();
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    if (lang) document.documentElement.setAttribute("lang", lang.toLowerCase());
    else {
        lang = "FR";
        localStorage.setItem("lang", lang);
    }
    changeLang(lang === "FR" ? (0, _frJsonDefault.default) : lang === "EN" ? (0, _enJsonDefault.default) : (0, _esJsonDefault.default));
    let langCopy = [
        ...langList
    ];
    for(let i = 0; i < langSelect.length; i++)if (langCopy.length === langList.length) {
        let select = langSelect[i];
        if (select.classList.contains("active")) {
            select.innerHTML = lang;
            langCopy = langCopy.filter((item)=>item !== lang);
        }
    } else {
        let select = langSelect[i];
        select.innerHTML = langCopy[0];
        langCopy = langCopy.filter((item)=>item !== langCopy[0]);
    }
    $.ajax({
        type: "GET",
        url: "https://wakatime.com/share/@Torisutan/9bbba351-99bb-4558-a775-7164226010ae.json",
        dataType: "jsonp",
        success: function(response) {
            let totalTime = response.data["grand_total"]["total_seconds_including_other_language"];
            let averageTime = response.data["grand_total"]["daily_average_including_other_language"];
            alltime.innerText = timeToString(Math.floor(totalTime));
            dailytime.innerText = timeToString(Math.floor(averageTime));
        }
    });
    const animElemId = [
        "logo",
        "title",
        "subtitle",
        "tab-nav",
        "profile-picture"
    ];
    for(let i = 0; i < animElemId.length; i++){
        let id = animElemId[i];
        document.getElementById(id).classList.add("anim");
    }
});
sun.addEventListener("click", ()=>{
    let theme = document.documentElement.getAttribute("data-theme");
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
});
for(let i = 0; i < langChange.length; i++)langChange[i].addEventListener("click", ()=>{
    let lang = langChange[i].innerHTML;
    document.documentElement.setAttribute("lang", lang.toLowerCase());
    localStorage.setItem("lang", lang);
    window.location.reload();
});
function changeLang(lang) {
    const elements = document.querySelectorAll("*:not(script):not(style):not(br):not(hr):not(img):not(input):not(textarea):not(select):not(option):not(canvas):not(svg):not(path):not(linearGradient):not(radialGradient):not(stop):not(mask):not(symbol):not(use):not(iframe):not(video):not(audio)");
    elements.forEach((element)=>{
        const text = element.textContent.trim();
        if (element.children.length > 0) return;
        if (text && lang[text]) {
            element.innerHTML = lang[text];
            if (element.hasAttribute("text")) element.setAttribute("text", lang[text]);
        }
    });
}
send_button.addEventListener("click", ()=>{
    const form_fields = [
        "name",
        "email",
        "subject"
    ].map((id)=>document.getElementById(`form-${id}`));
    const error_fields = [
        "name",
        "email",
        "subject"
    ].map((id)=>document.getElementById(`${id}-error`));
    let valid = true;
    for(let i = 0; i < form_fields.length; i++){
        const field = form_fields[i];
        const error_field = error_fields[i];
        const value = field.value.trim();
        const hasError = value === "";
        error_field.classList.toggle("show", hasError);
        field.classList.toggle("error", hasError);
        valid = valid && !hasError;
    }
    if (!valid) return;
    let param = {
        "name": form_fields[0].value,
        "email": form_fields[1].value,
        "message": form_fields[2].value
    };
    (0, _browserDefault.default).init("EB8AunJ3SQFowF7C9");
    (0, _browserDefault.default).send("service_kto8twb", "template_0k0pi8w", param).then(function(success) {
        let elemSuccess = document.getElementById("success-send-message");
        elemSuccess.style.display = "block";
        setTimeout(()=>{
            elemSuccess.style.display = "none";
        }, 5000);
    }, function(error) {
        let elemError = document.getElementById("error-send-message");
        elemError.style.display = "block";
        setTimeout(()=>{
            elemError.style.display = "none";
        }, 5000);
    });
});
coursesTab.addEventListener("click", ()=>{
    let url = "https://courses.torisutan.live/";
    window.open(url, "_blank");
});
const animElemClass = [
    "skill-bar"
];
const animElemSection = [
    "profile",
    "skill",
    "project",
    "software",
    "contact",
    "footer"
];
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.classList.add("anim");
    });
});
for(let i = 0; i < animElemClass.length; i++)document.querySelectorAll(`.${animElemClass[i]}`).forEach((value)=>{
    observer.observe(value);
});
for(let i = 0; i < animElemSection.length; i++){
    let element = document.querySelector(`#${animElemSection[i]}`);
    observer.observe(element);
}

},{"./assets/langs/fr.json":"k2KFO","./assets/langs/en.json":"cFDQy","./assets/langs/es.json":"8q2U5","@emailjs/browser":"kbSqr","eefe49df6a87961e":"guDUK","e0b133af2d47c1ed":"jlAKC","5ddd7c86437919a2":"1Ui6s","f077552adf6dd1a2":"8r146","@vercel/analytics":"l4OoA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k2KFO":[function(require,module,exports) {
module.exports = JSON.parse('{"profile":"Profil","skills":"Comp\xe9tences","projects":"Projets","software":"Logiciels","contact":"Contact","courses":"Cours","title":"Salut, je suis Tristan !","subtitle":"Un d\xe9veloppeur <span class=\\"devtype\\">Java</span>, <span class=\\"devtype\\">Python</span> et <span class=\\"devtype\\">Web</span>","profileDescription":"Je suis Tristan Clowez, un d\xe9veloppeur informatique de 18 ans, passionn\xe9 et avec 4 ans d\'exp\xe9rience. Mon expertise inclut les langages Java, Python et les technologies front-end (HTML, CSS, JavaScript). J\'utilise aussi NodeJS pour le back-end. Je suis actuellement en premi\xe8re ann\xe9e de cycle pr\xe9paratoire \xe0 l\'ESIEA. Venez d\xe9couvrir mes projets et comp\xe9tences en d\xe9veloppement !","totalCodeTime":"Nombre d\'heures de code depuis F\xe9vrier 2021 :","averageCodeTime":"Nombre d\'heures de code par jour en moyenne depuis F\xe9vrier 2021 :","portfolioDescription":"Le site sur lequel vous vous trouvez ! Enti\xe8rement developp\xe9 en vanilla JS et SCSS, il est responsive et est disponible dans 3 langues (Fran\xe7ais, Anglais et Espagnol). Il est une refonte de mon premier site, qui \xe9tait en React avec un nouveau design. Il est h\xe9berg\xe9 sur Vercel.","portfolioLanguages":"Langage utilis\xe9 : <strong>HTML</strong>, <strong>SCSS</strong> et <strong>JS</strong>","seeProject":"Voir le projet","javawarsDescription":"Un projet r\xe9alis\xe9 en Java permettant une utilisation simplifi\xe9 de l\'API de Guild Wars 2. Guild Wars 2 est un MMORPG sortie en 2012 et une API est disponible pour les d\xe9veloppeurs. Ce projet contient de nombreuses classes permenttant une meilleure utilisation de l\'API avec des commentaires (Projet en cours de d\xe9veloppement et non disponible en open source pour l\'instant).","javawarsLanguages":"Langages utilis\xe9s : <strong>Java</strong>","softwareLogo":"Logo","softwareName":"Titre","softwareCompany":"Entreprise","softwareTimeUse":"Taux d\'utilisation","softwareLink":"Lien","socialText":"Passionn\xe9 de d\xe9veloppement, je mets mon expertise \xe0 votre disposition pour cr\xe9er des solutions digitales innovantes et sur mesure. Mon engagement envers la qualit\xe9, la cr\xe9ativit\xe9 et l\'excellence vous garantit des r\xe9sultats qui r\xe9pondent \xe0 vos besoins et vous aident \xe0 atteindre vos objectifs.","inputNamePlaceholder":"Nom*","inputNameError":"*Le nom est obligatoire","inputEmailPlaceholder":"Email*","inputEmailError":"*L\'email est obligatoire","inputSubjectPlaceholder":"Sujet*","inputSubjectError":"*Le sujet est obligatoire","inputSendMessage":"Envoyer le message","successSendMessage":"Le message a \xe9t\xe9 envoy\xe9 avec succ\xe8s","errorSendMessage":"Une erreur est survenue lors de l\'envoi du message"}');

},{}],"cFDQy":[function(require,module,exports) {
module.exports = JSON.parse('{"profile":"Profile","skills":"Skills","projects":"Projects","software":"Software","contact":"Contact","courses":"Courses","title":"Hi, I\'m Tristan!","subtitle":"A <span class=\\"devtype\\">Java</span>, <span class=\\"devtype\\">Python</span> and <span class=\\"devtype\\">Web</span> developer","profileDescription":"I am Tristan Clowez, a 18-year-old computer developer, passionate and with 4 years of experience. My expertise includes the Java and Python programming languages, as well as front-end technologies (HTML, CSS, JavaScript). I also use NodeJS for back-end development. I\'m currently in my first year of preparatory studies at ESIEA. Come discover my projects and development skills!","totalCodeTime":"Total hours of code since February 2021:","averageCodeTime":"Average hours of code per day since February 2021:","portfolioDescription":"The website you are currently on! It has been fully developed using vanilla JS and SCSS, and is responsive and available in three languages (French, English, and Spanish). It is a redesign of my first website, which was built with React and has a new design. It is hosted on Vercel.","portfolioLanguages":"Languages used: <strong>HTML</strong>, <strong>SCSS</strong> and <strong>JS</strong>","seeProject":"See project","javawarsDescription":"A Java project to simplify use of the Guild Wars 2 API. Guild Wars 2 is an MMORPG released in 2012, and an API is available for developers. This project contains a number of classes to make it easier to use the API, with comments (Project under development and not yet available as open source).","javawarsLanguages":"Languages used: <strong>Java</strong>","softwareLogo":"Logo","softwareName":"Title","softwareCompany":"Company","softwareTimeUse":"Usage rate","softwareLink":"Link","socialText":"Passionate about development, I offer my expertise to create innovative and customized digital solutions for you. My commitment to quality, creativity, and excellence ensures results that meet your needs and help you achieve your goals.","inputNamePlaceholder":"Name*","inputNameError":"*Name is required","inputEmailPlaceholder":"Email*","inputEmailError":"*Email is required","inputSubjectPlaceholder":"Subject","inputSubjectError":"*Subject is required","inputSendMessage":"Send message","successSendMessage":"The message has been sent successfully","errorSendMessage":"An error has occurred while sending the message"}');

},{}],"8q2U5":[function(require,module,exports) {
module.exports = JSON.parse('{"profile":"Perfil","skills":"Habilidades","projects":"Proyectos","software":"Software","contact":"Contacto","courses":"Cursos","title":"\xa1Hola, soy Tristan!","subtitle":"Un desarrollador <span class=\\"devtype\\">Java</span>, <span class=\\"devtype\\">Python</span> y <span class=\\"devtype\\">Web</span>","profileDescription":"Soy Tristan Clowez, un desarrollador inform\xe1tico de 18 a\xf1os, apasionado y con 4 a\xf1os de experiencia. Mi experiencia incluye los lenguajes de programaci\xf3n Java y Python, as\xed como tecnolog\xedas front-end (HTML, CSS, JavaScript). Tambi\xe9n uso NodeJS para el desarrollo de back-end. Actualmente estoy en mi primer a\xf1o de estudios preparatorios en la ESIEA. \xa1Ven a descubrir mis proyectos y habilidades en desarrollo!","totalCodeTime":"Horas totales de c\xf3digo desde febrero de 2021:","averageCodeTime":"Horas promedio de c\xf3digo por d\xeda desde febrero de 2021:","portfolioDescription":"\xa1El sitio web en el que te encuentras actualmente! Ha sido completamente desarrollado utilizando vanilla JS y SCSS, y es responsive y est\xe1 disponible en tres idiomas (franc\xe9s, ingl\xe9s y espa\xf1ol). Es una renovaci\xf3n de mi primer sitio web, que fue construido con React y tiene un nuevo dise\xf1o. Est\xe1 alojado en Vercel.","portfolioLanguages":"Idiomas utilizados: <strong>HTML</strong>, <strong>SCSS</strong> y <strong>JS</strong>","seeProject":"Ver proyecto","javawarsDescription":"Un proyecto Java que simplifica el uso de la API de Guild Wars 2. Guild Wars 2 es un MMORPG lanzado en 2012 y existe una API disponible para desarrolladores. Este proyecto contiene una serie de clases para facilitar el uso de la API, junto con comentarios (Proyecto en desarrollo y no disponible como c\xf3digo abierto por el momento).","javawarsLanguages":"Idiomas utilizados: <strong>Java</strong>","softwareLogo":"Logo","softwareName":"T\xedtulo","softwareCompany":"Empresa","softwareTimeUse":"Tasa de uso","softwareLink":"Enlace","socialText":"Apasionado por el desarrollo, pongo mi experiencia a su disposici\xf3n para crear soluciones digitales innovadoras y personalizadas. Mi compromiso con la calidad, la creatividad y la excelencia garantiza resultados que satisfacen sus necesidades y lo ayudan a alcanzar sus objetivos.","inputNamePlaceholder":"Nombre*","inputNameError":"*El nombre es obligatorio","inputEmailPlaceholder":"Email*","inputEmailError":"*El correo electr\xf3nico es obligatorio","inputSubjectPlaceholder":"Asunto*","inputSubjectError":"*El asunto es obligatorio","inputSendMessage":"Enviar mensaje","successSendMessage":"El mensaje se ha enviado correctamente","errorSendMessage":"Se ha producido un error al enviar el mensaje"}');

},{}],"kbSqr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>(0, _init.init));
parcelHelpers.export(exports, "send", ()=>(0, _send.send));
parcelHelpers.export(exports, "sendForm", ()=>(0, _sendForm.sendForm));
var _init = require("./methods/init/init");
var _send = require("./methods/send/send");
var _sendForm = require("./methods/sendForm/sendForm");
exports.default = {
    init: (0, _init.init),
    send: (0, _send.send),
    sendForm: (0, _sendForm.sendForm)
};

},{"./methods/init/init":"lqGq1","./methods/send/send":"m7CoX","./methods/sendForm/sendForm":"a1Cpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqGq1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _store = require("../../store/store");
const init = (publicKey, origin = "https://api.emailjs.com")=>{
    (0, _store.store)._userID = publicKey;
    (0, _store.store)._origin = origin;
};

},{"../../store/store":"3eehJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eehJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
const store = {
    _origin: "https://api.emailjs.com"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"m7CoX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "send", ()=>send);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const send = (serviceID, templateID, templatePrams, publicKey)=>{
    const uID = publicKey || (0, _store.store)._userID;
    (0, _validateParams.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: "3.11.0",
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams
    };
    return (0, _sendPost.sendPost)("/api/v1.0/email/send", JSON.stringify(params), {
        "Content-type": "application/json"
    });
};

},{"../../store/store":"3eehJ","../../utils/validateParams":"5GPWw","../../api/sendPost":"3pmzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GPWw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateParams", ()=>validateParams);
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!serviceID) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!templateID) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pmzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendPost", ()=>sendPost);
var _emailJSResponseStatus = require("../models/EmailJSResponseStatus");
var _store = require("../store/store");
const sendPost = (url, data, headers = {})=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", ({ target })=>{
            const responseStatus = new (0, _emailJSResponseStatus.EmailJSResponseStatus)(target);
            if (responseStatus.status === 200 || responseStatus.text === "OK") resolve(responseStatus);
            else reject(responseStatus);
        });
        xhr.addEventListener("error", ({ target })=>{
            reject(new (0, _emailJSResponseStatus.EmailJSResponseStatus)(target));
        });
        xhr.open("POST", (0, _store.store)._origin + url, true);
        Object.keys(headers).forEach((key)=>{
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};

},{"../models/EmailJSResponseStatus":"oZ06T","../store/store":"3eehJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oZ06T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailJSResponseStatus", ()=>EmailJSResponseStatus);
class EmailJSResponseStatus {
    constructor(httpResponse){
        this.status = httpResponse ? httpResponse.status : 0;
        this.text = httpResponse ? httpResponse.responseText : "Network Error";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1Cpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendForm", ()=>sendForm);
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
const findHTMLForm = (form)=>{
    let currentForm;
    if (typeof form === "string") currentForm = document.querySelector(form);
    else currentForm = form;
    if (!currentForm || currentForm.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return currentForm;
};
const sendForm = (serviceID, templateID, form, publicKey)=>{
    const uID = publicKey || (0, _store.store)._userID;
    const currentForm = findHTMLForm(form);
    (0, _validateParams.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append("lib_version", "3.11.0");
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", uID);
    return (0, _sendPost.sendPost)("/api/v1.0/email/send-form", formData);
};

},{"../../store/store":"3eehJ","../../utils/validateParams":"5GPWw","../../api/sendPost":"3pmzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guDUK":[function(require,module,exports) {
module.exports = require("8d9ebcb805e4c363").getBundleURL("UckoE") + "arrowRightActif.5430a446.svg" + "?" + Date.now();

},{"8d9ebcb805e4c363":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jlAKC":[function(require,module,exports) {
module.exports = require("47e4c387287ba2f2").getBundleURL("UckoE") + "arrowLeftActif.b99280bc.svg" + "?" + Date.now();

},{"47e4c387287ba2f2":"lgJ39"}],"1Ui6s":[function(require,module,exports) {
module.exports = require("cf3e486d250bbe78").getBundleURL("UckoE") + "arrowRightHover.8ca0ee8b.svg" + "?" + Date.now();

},{"cf3e486d250bbe78":"lgJ39"}],"8r146":[function(require,module,exports) {
module.exports = require("9b3b06c0e67ce266").getBundleURL("UckoE") + "arrowLeftHover.a5ef33dd.svg" + "?" + Date.now();

},{"9b3b06c0e67ce266":"lgJ39"}],"l4OoA":[function(require,module,exports) {
// package.json
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>generic_default);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "track", ()=>track);
var name = "@vercel/analytics";
var version = "1.1.1";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = "development";
        if (env === "development" || env === "test") return "development";
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    let props = properties;
    const errorProperties = [];
    for (const [key, value] of Object.entries(properties))if (typeof value === "object" && value !== null) {
        if (options.strip) props = removeKey(key, props);
        else errorProperties.push(key);
    }
    if (errorProperties.length > 0 && !options.strip) throw Error(`The following properties are not valid: ${errorProperties.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    return props;
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) (_a = window.va) == null || _a.call(window, "beforeSend", props.beforeSend);
    const src = isDevelopment() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.setAttribute("data-sdkn", name);
    script.setAttribute("data-sdkv", version);
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) script.setAttribute("data-debug", "false");
    document.head.appendChild(script);
}
function track(name2, properties) {
    var _a, _b;
    if (!isBrowser()) {
        const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) console.warn(msg);
        else throw new Error(msg);
        return;
    }
    if (!properties) {
        (_a = window.va) == null || _a.call(window, "event", {
            name: name2
        });
        return;
    }
    try {
        const props = parseProperties(properties, {
            strip: isProduction()
        });
        (_b = window.va) == null || _b.call(window, "event", {
            name: name2,
            data: props
        });
    } catch (err) {
        if (err instanceof Error && isDevelopment()) console.error(err);
    }
}
var generic_default = {
    inject,
    track
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3smKr","bB7Pu"], "bB7Pu", "parcelRequire2041")

//# sourceMappingURL=index.3d214d75.js.map
