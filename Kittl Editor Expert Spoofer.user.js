// ==UserScript==
// @name         Kittl Editor Crack
// @version      3.0.0
// @description  we don't like paywalls
// @author       danthekidd
// @match        https://kittl.com/*
// @match        https://www.kittl.com/*
// @match        https://app.kittl.com/*
// @icon         https://app.kittl.com/favicon.ico
// @updateURL    https://github.com/danthekidd/Kittl-Editor-Crack/raw/refs/heads/main/Kittl%20Editor%20Expert%20Spoofer.user.js
// @grant        none
// ==/UserScript==

const planLevel = "EXPERT";

window.setTimeout(()=>{
webpackChunk_repo_editor.push([
    [Math.random()],
    {},
    req => {
        const component = req(13594).k;
        if (component && typeof component.setState === 'function') {
            component.setState(prevState => ({
                user: {
                    ...(prevState.user || {}),
                    plan: planLevel,
                    email: "user@kittl.com",
                }
            }));
            console.log(`User plan set to ${planLevel}`);
        } else {
            console.error("setState not found on component");
        }
    },
]);
},2000)
