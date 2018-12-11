# RailroadPM.org Technical Comparison: 1.x vs 2.x

Here's a summary of the technical differences between the previous RPM solution (Version 1.x) and this one (Version 2.x).

<table class=MsoTable15Grid5DarkAccent5 border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none'>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-right:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>&nbsp;</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:solid white 1.0pt;
  border-left:none;border-bottom:solid white 1.0pt;border-right:none;
  background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Version 1.x</span></b></p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border:solid white 1.0pt;
  border-left:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Version 2.x</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>CMS</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Sitecore</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><span class=MsoHyperlink><a href="https://www.netlifycms.org/">Netlify
  CMS</a></span></p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Database</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>SQL Server</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Plain text files in GitHub (<span class=MsoHyperlink><a
  href="https://en.wikipedia.org/wiki/Document-oriented_database">document-oriented</a></span>,
  <span class=MsoHyperlink><a href="https://headlesscms.org/about/">Git-based</a></span>)</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Database Schema</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Measures are normalized into separate tables for each of the 3 main categorical
  dimensions: Cars On Line, Train Speed, and Terminal Dwell</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Measures are de-normalized and pre-joined into a single flat file for
  each week and railroad, with composite keys identifying individual measure
  values</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Data Relationships</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>SQL Foreign Keys (numeric or GUIDs: meaningless surrogate keys)
  usually with database referential integrity</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Meaningful “Key” text values designed to link pieces of data across
  files. Integrity is maintained by following the convention/design</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Data Versioning</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>None, except from SQL backups</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Built-in to Git/GitHub. 53-Week history is maintained for data. All history is maintained for source code. Excellent side-by-side comparison tools.</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Data Processing</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><i>Runtime</i> SQL Queries to produce web output <i>on each visitor request</i>
  (though Cloudflare caching mitigates sometimes slow runtime approach)</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><i>Build-time</i> text file querying (<span class=MsoHyperlink><a
  href="https://gohugo.io/">Hugo</a></span> static site generator and <span
  class=MsoHyperlink><a href="https://golang.org/pkg/text/template/">Golang
  templates</a></span>) to produce <i>pre-built data</i> (Cloudflare unnecessary)</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Page Rendering</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><i>Runtime</i> HTML rendering <i>on each visitor request</i>
  (mitigated by Cloudflare)</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Mobile app-like initial download, then minimal content/data sent
  thereafter</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Page Navigation</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Multiple pages, one for each view, with full browser screen refresh
  on navigation</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Single Page Application (<span class=MsoHyperlink><a
  href="https://en.wikipedia.org/wiki/Single-page_application">SPA</a></span>) does
  not repaint entire browser window. User interaction is smooth, uninterrupted,
  subtly animated</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>User Management, Authentication, Sessions</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Unknown. Sitecore and database? Stateful session-oriented user security?</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Free tier (at present) of <span class=MsoHyperlink><a
  href="https://www.netlify.com/docs/identity/">Netlify Identity</a></span>
  service. Up to 1,000 users. Stateless token-based security (<span
  class=MsoHyperlink><a href="https://en.wikipedia.org/wiki/JSON_Web_Token">JWT</a></span>).
  No sessions needed.</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Security: Attack Surface</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Significant. SQL Server (SQL injection), Sitecore</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Negligible. No runtime server processing is occurring. All data is
  statically pre-built. App is pre-built to run in browser.</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Weekly Publication Process, Wed. 2pm
  Eastern</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Unknown. Manual process? Execute pre-defined SQL Queries?</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Automatic. The Netlify-hosted sites are re-built in seconds every Wed
  at 2pm Eastern upon triggering <span class=MsoHyperlink><a
  href="https://www.netlify.com/docs/webhooks/#incoming-webhooks">a webhook
  exposed by Netlify</a></span>.</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Data Reading API</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>None? Newer Sitecore versions seem to offer this</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>REST API exposed at <span class=MsoHyperlink><a
  href="https://api.rrpm.run">https://api.rrpm.run</a><br>
  </span>(UAT location. Production URL will be similar)</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Data Writing API</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>None</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#BDD6EE;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Secure REST API proxied and gatewayed through Netlify to GitHub. The
  same actions taken via the CMS (login, add/edit/delete) can be automated via
  the exact same API calls made by the CMS under-the-hood.</p>
  </td>
 </tr>
 <tr>
  <td width=132 valign=top style='width:98.75pt;border:solid white 1.0pt;
  border-top:none;background:#5B9BD5;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'><b><span style='color:white'>Software Licensing, Hosting and
  Infrastructure Cost</span></b></p>
  </td>
  <td width=198 valign=top style='width:148.5pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>Significant</p>
  </td>
  <td width=294 valign=top style='width:220.25pt;border-top:none;border-left:
  none;border-bottom:solid white 1.0pt;border-right:solid white 1.0pt;
  background:#DEEAF6;padding:0in 5.4pt 0in 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0in;margin-bottom:.0001pt;line-height:
  normal'>$0 (subject to changes in terms by Netlify and GitHub/Microsoft)</p>
  </td>
 </tr>
</table>
