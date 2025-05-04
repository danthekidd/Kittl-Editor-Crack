// ==UserScript==
// @name         Kittl Editor Crack
// @version      3.1.0
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

webpackChunk_repo_editor.push([
    [Math.random()],
    {},
    req => {
        const store = req(13594).k;

        if (store && typeof store.subscribe === 'function') {
            store.subscribe(() => {
                const current = store.getState();
                const email = current?.user?.email;
                const currentPlan = current?.user?.plan;

                if (currentPlan !== "EXPERT" && email) {
                    store.setState(prev => ({
                        user: {
                            ...(prev.user || {}),
                            plan: "EXPERT"
                        }
                    }));
                    console.log("Plan forced to EXPERT");
                }
            });
        } else {
            console.error("Expected store with subscribe/getState/setState");
        }
    },
]);
