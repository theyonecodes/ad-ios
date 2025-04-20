// ==UserScript==
// @name         Ad-ios (Enhanced)
// @namespace    https://github.com/theyonecodes/ad-ios
// @version      1.1.0
// @description  Bid farewell to online ads - starting with YouTube (improved with MutationObserver)
// @match        https://www.youtube.com/*
// @grant        none
// @author       theyonecodes
// ==/UserScript==

(function () {
    'use strict';

    function removeAds() {
        const player = document.querySelector('#movie_player');
        if (!player) return;

        const skipButton = player.querySelector('.ytp-ad-skip-button');
        if (skipButton && !skipButton.disabled) {
            skipButton.click();
        }

        const video = player.querySelector('video');
        if (video) {
            const isAd = video.duration > 0 &&
                (player.querySelector('.ytp-ad-overlay') ||
                 player.querySelector('.ytp-ad-container') ||
                 video.src.includes('/ads/') ||
                 video.currentSrc.includes('/ads/'));

            if (isAd) {
                video.currentTime = video.duration - 0.1;
            }
        }

        const adSelectors = [
            '.ytp-ad-preview-container',
            '.ytp-ad-image-overlay',
            '.ytp-ad-text',
            '.video-ads',
            '.ytp-ad-module'
        ];

        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    }

    // Run immediately and then continuously
    removeAds();
    const interval = setInterval(removeAds, 1000);

    // MutationObserver for SPA navigation or dynamic ad elements
    const observer = new MutationObserver(() => {
        removeAds();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
