// ==UserScript==
// @name         Ad-ios
// @namespace    https://github.com/theyonecodes/ad-ios
// @version      1.0.0
// @description  Bid farewell to online ads - starting with YouTube
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function adFarewell() {
        try {
            const player = document.querySelector('#movie_player');
            if (!player) return;

            const adOverlay = player.querySelector('.ytp-ad-overlay');
            const adContainer = player.querySelector('.ytp-ad-container');
            const skipButton = player.querySelector('.ytp-ad-skip-button');
            
            if (skipButton && !skipButton.disabled) {
                skipButton.click();
                return;
            }

            const video = player.querySelector('video');
            if (video) {
                const isAd = video.duration > 0 &&
                    (adOverlay || adContainer ||
                    video.src.includes('/ads/') ||
                    video.currentSrc.includes('/ads/'));

                if (isAd) {
                    if (video.duration > 0) {
                        video.currentTime = video.duration - 0.1;
                    }
                }
            }

            const adElements = [
                '.ytp-ad-preview-container',
                '.ytp-ad-image-overlay',
                '.ytp-ad-text'
            ];

            adElements.forEach(selector => {
                const element = document.querySelector(selector);
                if (element) element.remove();
            });

        } catch (error) {
            console.error('Ad farewell attempt failed');
        }
    }

    const adFarewellInterval = setInterval(adFarewell, 1000);

    setTimeout(() => {
        clearInterval(adFarewellInterval);
    }, 30000);
})();
