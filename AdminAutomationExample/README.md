# RailroadPM.org Admin Kit - Admin Automation Details

This **Admin Automation** option is the recommended way of performing EDI with the RailroadPM system. It mimics the steps that a human user would take to login to the RailroadPM data administration (aka "extranet") website and enter the weekly data. This has the benefit of consistency in the way that the data is accepted and verified by the RailroadPM system.

To use the Admin Automation option for EDI, here are the steps you would follow manually from a command prompt. You can automate the appropriate weekly pieces of this procedure (e.g., copying your weekly data file to the appropriate folder and running the upload script) to make this an unattended process.

1.  Clone or download this GitHub repo.

1.  Change your current working directory to this `AdminAutomationExample` folder:

    ```bash
    cd AdminAutomationExample
    ```

1.  Install [Node.js (LTS version)](https://nodejs.org/en/download/) if it isn't already installed.

1.  Run the following command to install the required Node.js NPM packages:

    ```bash
    npm install
    ```

1.  Edit `config.json`, replacing the placeholder values with your RailroadPM Administrator email and password. Save those changes.

    - **NOTE**: You must use an email and password that are registered and managed **directly in Netlify Identity** as an `Administrator` and not using another credential source such as GitHub or Google.

1.  Replace `NewWeek.toml` (which is supplied solely as a placeholder here) with the **actual** weekly data you wish to upload. Your weekly file must be in _precisely_ the format you see there, with changes allowed only to the numeric values. The `WeekEnding` value _must_ be the **weekly reporting period end date (a Friday)** in the format: `'YYYYMMDD'`.

    - **NOTE**: This EDI process is designed solely for submitting **new** reports. It does **not** support any use-cases involving updates to existing reports. And in fact, this process is designed to fail if any reports already exist for the week in question.

1.  Finally, with your Administrator credentials configured, and your properly formatted `NewWeek.toml` file in place, execute the following command:

    ```bash
    npm run upload
    ```

1.  You _may_ be asked to allow the process to send traffic through your firewall. If so, allow access.

1.  Note the _exit code_ of the process. A **non-zero exit code** means that an error occurred and the data likely was not uploaded successfully. An exit code of _zero_ indicates success. Sample error and success outputs are provided in the `sample-output` folder.
