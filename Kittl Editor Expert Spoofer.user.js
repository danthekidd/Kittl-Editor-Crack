// ==UserScript==
// @name         Kittl Editor Expert Spoofer
// @version      0.1
// @description  Hook fetch and modify JSON responses on Kittl Editor
// @author       danthekidd
// @match        https://kittl.com/*
// @match        https://www.kittl.com/*
// @match        https://app.kittl.com/*
// @run-at       document-start
// @icon         https://app.kittl.com/favicon.ico
// @grant        none
// ==/UserScript==

const originalFetch = window.fetch;
const planLevel = "EXPERT";

window.fetch = function(input, init) {
    return originalFetch(input, init).then(response => {
        if (response.headers.get('content-type')?.includes('application/json')) {
            return response.clone().json().then(data => {
                if (typeof data === 'object' && data !== null) {
                    if ("plan" in data && "profile" in data) {
                        data.plan = planLevel;
                        data.credits.generation.balance = 9999;
                        data.designsLimit = 9999;
                        data.designsLimitReached = false;
                        data.uploadSpaceLimitReached = false;
                        data.email = "user@kittl.com"; // gives some admin-only beta features


                        data.profile.plan = planLevel;
                        data.profile.credits.generation.balance = 9999;
                        data.profile.designsLimit = 9999;
                        data.profile.designsLimitReached = false;
                        data.profile.uploadSpaceLimitReached = false;
                        data.profile.email = "user@kittl.com"; // gives some admin-only beta features

                        console.log(data);

                    } else if ("profile" in data) {
                        data.profile.email = "user@kittl.com"; // gives some admin-only beta features
                        console.log(data);

                    }
                }
                const modifiedResponse = new Response(JSON.stringify(data), {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                });
                return modifiedResponse;
            });
        }
        return response;
    });
};