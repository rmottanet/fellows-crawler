# Fellows Crawler

## ctrl+s :v:

FellowsCrawler is an automation project developed to track and manage contacts on this specific network.

## About the Project

This project is developed in Google Apps Script and is intended to be executed programmatically to automate the process of following and unfollowing back.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 10 or higher)
- [Clasp](https://github.com/google/clasp) - A command-line tool for Google Apps Script development.

## Cloning and Uploading the Project

1. Clone this repository to your local environment:

```bash
git clone https://github.com/rmottanet/fellows-crawler.git
```

2. Navigate to the project directory:

```bash
cd fellows-crawler/bot
```

3. Execute the command to log in to Clasp and link your Google account:

```bash
clasp login
```

4. After logging in, execute the following command to create a new Apps Script project and link it to the cloned repository:

```bash
clasp create --type standalone
```

5. The above command will generate a `.clasp.json` file. Make sure not to share or expose this file publicly as it contains personal information.

6. Now, upload the project files to Apps Script using the following command:

```bash
clasp push
```

7. After successful upload, you can access the Google Apps Script Editor to view and edit the code.

## Setting up the Execution Environment

1. Access GitHub and log in to your account.
2. Go to Settings > Developer settings.
3. Create a new personal access token with appropriate access permissions.
4. Copy the generated token.
5. In the Google Apps Script environment, go to the project settings and insert the `GITHUB_TOKEN` in the script properties.

In the `utils/excludeUsers.js` file, you can insert the users you do not want to include in the operation.

Make sure to review the application creation process using Clasp to ensure that no personal data is publicly exposed.

## Contributing

Contributions to the Fellows Crawler project are welcome! If you have ideas for improvements, feature requests, or bug reports, please feel free to open an issue or submit a pull request.

---

Thank you for considering the Fellows Crawler for your contacts manager needs. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding! 🚀

<br />
<br />
<p align="center">
<a href="https://gitlab.com/rmottanet"><img src="https://img.shields.io/badge/Gitlab--_.svg?style=social&logo=gitlab" alt="GitLab"></a>
<a href="https://github.com/rmottanet"><img src="https://img.shields.io/badge/Github--_.svg?style=social&logo=github" alt="GitHub"></a>
<a href="https://instagram.com/rmottanet/"><img src="https://img.shields.io/badge/Instagram--_.svg?style=social&logo=instagram" alt="Instagram"></a>
<a href="https://www.linkedin.com/in/rmottanet/"><img src="https://img.shields.io/badge/Linkedin--_.svg?style=social&logo=linkedin" alt="Linkedin"></a>
</p>
<br />
