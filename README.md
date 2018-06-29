# RailroadPM.org Participant Kit

Railroad participants can use the information and examples in this repo for integrating with the new RailroadPM.org site!

This should help to make data collection and submission activities go smoothly by demonstrating methods for automated machine-to-machine
electronic data interchange (EDI).

## Accept Invitation to Participate

This kit provides guidance on submitting weekly reports to RailroadPM.org. However, you must have received an email **invitation** to participate, and you must have responded to the email and registered your credentials (username/email and password) before proceeding.

## Two Options

Once you have accepted the invitation to participate and your email address and password have
been registered in the system, you have **two options** for **electronically submitting** weekly railroad performance reports.

### Option One - Admin Automation

The first option, **Admin Automation**, is recommended for most participants. This option involves:

1.  Identifying a computer on your network suitable for running an electronic data interchange (EDI) process on a weekly basis, and installing [Node.js (LTS version 8.x)](https://nodejs.org/en/download/) on that computer. This option supports the following operating systems:
    - Mac OS 10.9+ (Mavericks+)
    - Linux Ubuntu 12.04+, Fedora 21, Debian 8
    - Windows 7+
1.  Identifying a folder on the computer and placing your latest weekly report file in that folder for processing each week.
1.  Each week, running a script **provided in this kit** to upload the weekly report data to the RailroadPM.org system.

**That's it**. Further technical details are provided in the [README file found in the AdminAutomationExample folder](/AdminAutomationExample/README.md) of this kit.

### Option Two - REST APIs

Details coming soon.
