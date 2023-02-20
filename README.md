# Sidebar Toggler

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-sidebar-toggler%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-sidebar-toggler?label=Latest%20Release&style=plastic) [![](https://img.shields.io/badge/changelog-click%20here-FFE800?style=plastic)](Changelog.md)

Finer control of the Obsidian sidebars. To be used with an external window manager.


---

> __Note__  
> This plugin has been archived, since the same functionality can now be achieved by the [Advanced URI plugin](https://obsidian.md/plugins?id=obsidian-advanced-uri) in a much more efficient manner using it's new `eval` URI scheme:

```text
# show left sidebar
obsidian://advanced-uri?eval=this.app.workspace.leftSplit.expand%28%29

# hide right sidebar
obsidian://advanced-uri?eval=this.app.workspace.rightSplit.collapse%28%29
```

---


<!--toc:start-->
- [What the plugin does](#what-the-plugin-does)
- [Purpose of this plugin](#purpose-of-this-plugin)
- [Similar plugins](#similar-plugins)
- [Installation](#installation)
- [Contribute](#contribute)
- [About the developer](#about-the-developer)
<!--toc:end-->

## What the plugin does

It adds four commands for toggling the sidebar. As opposed to Obsidian's native commands, which only allow *toggling* of the sidebars, you can explicitly determine whether to show or hide them.

- Hide left sidebar
- Hide right sidebar
- Show left sidebar
- Show right sidebar

In addition, the plugin registers a URI schemes for those commands. The URI must include `showLeft` or `showRight`, and both accept only `true` and `false` as valid input. You can also include both to affect both sidebars with one URI.

```text
# Show left sidebar (and do nothing to the ride sidebar)
obsidian://sidebar?showLeft=true

# Show left and hide right sidebar
obsidian://sidebar?showLeft=true&showRight=false
```

## Purpose of this plugin

The main use for this plugin is to provide a simple and clear method for __window management apps__ to control Obsidian's sidebars. Just add something like `open "obsidian://sidebar?side=left&show=false"` to your window management configuration to have your window manager control Obsidian's sidebars.

I, for example, have configured to hide Obsidian's sidebars when I trigger a vertical split of my windows. When I maximize my Obsidian window, the sidebars are shown again.

For the macOS Automation app [Hammerspoon](http://www.hammerspoon.org/), for example, such a function could look like this:

```lua
function toggleObsidianSidebar (obsiWin)
  local obsi_width = obsiWin:frame().w
  local screen_width = obsiWin:screen():frame().w
  if (obsi_width / screen_width > 0.6) then
   hs.urlevent.openURL("obsidian://sidebar?showLeft=true&showRight=false")
  else
   hs.urlevent.openURL("obsidian://sidebar?showLeft=false&showRight=false")
  end
end
```

## Similar plugins

[Hide Sidebars when Narrow](https://obsidian.md/plugins?id=obsidian-hide-sidebars-when-narrow) shows/hides the sidebars automatically based on configurable pixel widths.

## Installation

Available in Obsidian's Community Plugin Browser via: `Settings` → `Community Plugins` → `Browse` → Search for *"Sidebar Toggler"*

## Contribute

Please use the [`.eslintrc` configuration located in the repository](.eslintrc) and run eslint before doing a pull request.

```shell
# Run eslint fixing most common mistakes
eslint --fix *.ts
```

<!-- vale Google.FirstPerson = NO --> <!-- vale Microsoft.FirstPerson = NO -->
## About the developer

In my day job, I am a sociologist studying the social mechanisms underlying the digital economy. For my PhD project, I investigate the governance of the app economy and how software ecosystems manage the tension between innovation and compatibility. If you are interested in this subject, feel free to get in touch!

__Profiles__  

- [Academic Website](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

__Buy Me a Coffee__  
<br>
<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
