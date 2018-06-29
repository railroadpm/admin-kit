# RailroadPM.org Participant Kit - Admin Automation Details

To use the Admin Automation option for EDI, here are the steps you would follow manually from a command prompt. You can automate the appropriate weekly pieces of this procedure to make this an unattended process.

1.  Clone or download this GitHub repo.

1.  Change your current working directory to this `AdminAutomationExample` folder:

    ```bash
    cd AdminAutomationExample
    ```

1.  Install [Node.js (LTS version 8.x)](https://nodejs.org/en/download/) if it isn't already installed.

1.  Run the following command to install the required Node.js NPM packages:

    ```bash
    npm install
    ```

1.  Edit `config.json`, replacing the placeholder values with your RailroadPM participant email and password. Save those changes.

1.  Replace `NewWeek.toml` (which is supplied solely as a placeholder here) with the **actual** weekly data you wish to upload. For each current participating railroad, an example `.toml` file has been supplied in the `sample-data-files` folder. Your weekly file must be in _precisely_ the format you see there, with changes allowed only to the numeric values and to the `Title` string, which _must_ be the **weekly reporting period end date (a Friday)** in the format: `'YYYYMMDD'`.

1.  Finally, with your user credentials in place, and your properly formatted `NewWeek.toml` file in place, execute the following command:

    ```bash
    npm run upload
    ```

1.  Note the exit code of the process. A **non-zero exit code** means that an error occurred and
    the data likely was not uploaded successfully. A process exit code of zero indicates success. Some sample error and success outputs are provided in the `sample-output` folder.
