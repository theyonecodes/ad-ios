<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!-- Core shields relevant to the project -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/theyonecodes/ad-ios">
    <!-- *** Ensure 'docs/assets/adios-icon.gif' exists in your repo *** -->
    <img src="docs/assets/adios-icon.gif" alt="Ad-ios Logo" width="100" height="100">
  </a>

<h3 align="center">Ad-ios: Your Farewell to Online Ads</h3>

  <p align="center">
    Say "Adios!" to intrusive YouTube ads with this lightweight and effective UserScript.
    <br />
    <a href="https://github.com/theyonecodes/ad-ios"><strong>Explore the Code »</strong></a>
    <br />
    <br />
    <!-- Optional: Add a link to a Demo GIF/Video if you create one -->
    <!-- <a href="#">View Demo</a> · -->
    <a href="https://github.com/theyonecodes/ad-ios/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
    ·
    <a href="https://github.com/theyonecodes/ad-ios/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#development-setup-for-contributors">Development Setup (for Contributors)</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- Optional: Add a relevant screenshot/GIF if you have one -->
<!-- [![Product Screen Shot][product-screenshot]](https://github.com/theyonecodes/ad-ios) -->

Tired of YouTube ads interrupting your viewing experience? **Ad-ios** is a simple yet smart UserScript designed to automatically detect and skip or remove various types of ads on YouTube. Enjoy your content seamlessly!

Why Ad-ios?
*   **Lightweight:** No heavy frameworks, just pure JavaScript focused on the task.
*   **Effective:** Targets common ad formats and skips them quickly.
*   **Simple:** Install it once and forget it – it works silently in the background.
*   **Open Source:** Contribute, suggest improvements, or see exactly how it works.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

*   [![JavaScript][JavaScript-shield]][JavaScript-url]
*   Works with UserScript Managers like:
    *   [Tampermonkey](https://www.tampermonkey.net/)
    *   [Greasemonkey](https://www.greasespot.net/)
    *   [Violentmonkey](https://violentmonkey.github.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Ready to enjoy ad-free YouTube? Follow these simple steps.

### Prerequisites

You need a **UserScript Manager** browser extension. This allows your browser to run scripts like Ad-ios. We recommend Tampermonkey:

*   **Tampermonkey** (Recommended):
    *   [Install for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    *   [Install for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    *   [Install for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
    *   [Install for Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
    *   [Install for Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)
*   *Alternatively, other managers like Greasemonkey (Firefox) or Violentmonkey should work.*

### Installation

1.  Ensure your UserScript Manager (e.g., Tampermonkey) is installed and enabled in your browser.
2.  **Click the link below to install Ad-ios:**
    >>> [**Install Ad-ios UserScript**](https://github.com/theyonecodes/ad-ios/raw/main/src/ad-ios.user.js) <<<
3.  Your UserScript Manager will open a new tab showing the script's source code and information. Click the **"Install"** button.
4.  That's it! Visit YouTube, and Ad-ios will automatically start working.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

Ad-ios runs automatically on YouTube pages once installed. No configuration is needed for basic operation.

*   It identifies ad elements and video ads.
*   Automatically clicks "Skip Ad" buttons when they appear.
*   Attempts to remove overlay banners and other intrusive ad formats.

It aims to be unobtrusive and simply let you watch your videos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEVELOPMENT SETUP -->
## Development Setup (for Contributors)

Interested in improving Ad-ios or fixing a bug? Here’s how to set up your development environment:

1.  **Fork the Repository:** Click the "Fork" button on the [Ad-ios GitHub page](https://github.com/theyonecodes/ad-ios).
2.  **Clone Your Fork:** Replace `[YOUR-USERNAME]` with your GitHub username.
    ```sh
    git clone https://github.com/[YOUR-USERNAME]/ad-ios.git
    cd ad-ios
    ```
3.  **Create a Branch:** Make a new branch for your changes.
    ```sh
    git checkout -b feature/MyNewFeature # or fix/BugFixName
    ```
4.  **Make Your Changes:** Edit the core script file: `src/ad-ios.user.js`.
5.  **Test Locally:**
    *   In Tampermonkey, you can create a new script, paste your modified code, and enable it (disable the installed version from the web).
    *   *Advanced:* Configure Tampermonkey to load the script directly from your local file (`file:///path/to/your/ad-ios/src/ad-ios.user.js`) for easier testing during development (requires specific Tampermonkey settings).
6.  **Commit and Push:** Once you're happy with your changes:
    ```sh
    git add .
    git commit -m 'feat: Add support for new ad type' # Use descriptive commit messages
    git push origin feature/MyNewFeature
    ```
7.  **Open a Pull Request:** Go to your fork on GitHub and submit a pull request to the `main` branch of `theyonecodes/ad-ios`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Core functionality: Detect and skip common video/overlay ads.
- [x] Compatibility with major UserScript managers.
- [ ] Enhance detection for newer or less common ad formats.
- [ ] Investigate and handle edge cases (live streams, premieres, specific UI changes).
- [ ] Explore adding optional configuration via UserScript Commands.
- [ ] Improve documentation and add visual examples/demos.

See the [open issues](https://github.com/theyonecodes/ad-ios/issues) for a detailed list of proposed features and known issues. Feel free to suggest your own!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions make the open-source community thrive! We welcome any contributions that improve Ad-ios.

If you have a suggestion or find a bug:
1.  Check if an issue already exists for it.
2.  If not, open a new issue using the appropriate template (Bug Report or Feature Request).

If you want to contribute code:
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request against the `main` branch.

Please ensure your code adheres to basic readability standards.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` file in this repository for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

theyonecodes - <!-- *** Update email address *** --> your_email@example.com

Project Link: [https://github.com/theyonecodes/ad-ios](https://github.com/theyonecodes/ad-ios)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Helpful resources:

*   [Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php)
*   [Mozilla Developer Network (MDN)](https://developer.mozilla.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- Define URLs for shields and images -->
[contributors-shield]: https://img.shields.io/github/contributors/theyonecodes/ad-ios.svg?style=for-the-badge
[contributors-url]: https://github.com/theyonecodes/ad-ios/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/theyonecodes/ad-ios.svg?style=for-the-badge
[forks-url]: https://github.com/theyonecodes/ad-ios/network/members
[stars-shield]: https://img.shields.io/github/stars/theyonecodes/ad-ios.svg?style=for-the-badge&logo=star
[stars-url]: https://github.com/theyonecodes/ad-ios/stargazers
[issues-shield]: https://img.shields.io/github/issues/theyonecodes/ad-ios.svg?style=for-the-badge&logo=github
[issues-url]: https://github.com/theyonecodes/ad-ios/issues
[license-shield]: https://img.shields.io/github/license/theyonecodes/ad-ios.svg?style=for-the-badge
[license-url]: https://github.com/theyonecodes/ad-ios/blob/main/LICENSE

[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

<!-- Optional: Define path if you add a product screenshot -->
<!-- [product-screenshot]: docs/assets/demo.gif -->
