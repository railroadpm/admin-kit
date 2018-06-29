# RailroadPM.org Participant Kit - REST APIs

Using the **REST APIs** requires knowledge of web software development.

The RailroadPM system uses GitHub as its data store, and Netlify and their open source content management system Netlify CMS as a user-friendly administrative UI and user management system.

Here's the basic outline of the code you would need to write to call the REST APIs exposed by Netlify and GitHub for RailroadPM.

1.  POST your participant credentials to the authentication endpoint to retrieve a token:

    ```
    Request URL: https://admin.rrpm.run/.netlify/identity/token
    Request Method: POST
    Form Data:
      grant_type: password
      username: YourParticipantEmail
      password: YourParticipantPassword
    ```

1.  Note the `access_token` in the response upon successful login

    ```json
    {
      "access_token": "eyJh...",
      "token_type": "bearer",
      "expires_in": 3600,
      "refresh_token": "EcC9..."
    }
    ```

1.  Now, use the Bearer token in an authorization header to call the GitHub APIs to upload your data. The GitHub API endpoints are proxied and gatewayed through a [Netlify service](https://www.netlify.com/docs/git-gateway/) so that participants are not required to have a GitHub account. The relevant endpoints are:

    - https://admin.rrpm.run/.netlify/git/github/git/blobs
    - https://admin.rrpm.run/.netlify/git/github/branches/master
    - https://admin.rrpm.run/.netlify/git/github/git/trees/:commit-sha
    - https://admin.rrpm.run/.netlify/git/github/git/commits
    - https://admin.rrpm.run/.netlify/git/github/git/refs/heads/master

1.  For more details on how to formulate the GitHub API calls you can refer to the Netlify CMS source code [here](https://github.com/netlify/netlify-cms/blob/b65f68efd46e4ae01064afd8aa3ecd181a8a3c4d/src/backends/github/implementation.js) and [here](https://github.com/netlify/netlify-cms/blob/55a24a75c14fcef97b19f9c1fe6cc1579e0b59c2/src/backends/github/API.js).
