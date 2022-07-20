# Sidebar Toggler

![](https://img.shields.io/github/downloads/chrisgrieser/obsidian-sidebar-toggler/total?label=Total%20Downloads&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-sidebar-toggler?label=Latest%20Release&style=plastic) [![](https://img.shields.io/badge/changelog-click%20here-FFE800?style=plastic)](Changelog.md)

Finer control of the Obsidian sidebars. To be used with an external window manager.

## What the plugin does
It adds four commands for toggling the sidebar. As opposed to Obsidian's native commands, which only allow *toggling* of the sidebars, you can explicitly determine whether to show or hide them.
- Hide left sidebar
- Hide right sidebar
- Show left sidebar
- Show right sidebar

In addition, the plugin registers four URI schemes for those commands:

```text
obsidian://sidebar?side=left&show=false
obsidian://sidebar?side=right&show=false
obsidian://sidebar?side=left&show=true
obsidian://sidebar?side=right&show=true
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
  	hs.urlevent.openURL("obsidian://sidebar?side=left&show=true")
  else
  	hs.urlevent.openURL("obsidian://sidebar?side=left&show=false")
  end
end
```

## Similar plugins
[Hide Sidebars when Narrow](https://obsidian.md/plugins?id=obsidian-hide-sidebars-when-narrow) shows/hides the sidebars automatically based on configurable pixel widths.

## Installation
Right now, the plugin is still in beta. It can be installed with the [BRAT Plugin](https://github.com/TfTHacker/obsidian42-brat).

When published, it will be available in Obsidian's Community Plugin Browser via: `Settings` → `Community Plugins` → `Browse` → Search for *"Sidebar Toggler"*

## Contribute
Please use the [`.eslintrc` configuration located in the repository](.eslintrc) and run eslint before doing a pull request, and please do *not* use `prettier`. 🙂

```shell
# Run eslint fixing most common mistakes
eslint --fix *.ts
```

## About the Developer
In my day job, I am a sociologist studying the social mechanisms underlying the digital economy. For my PhD project, I investigate the governance of the app economy and how software ecosystems manage the tension between innovation and compatibility. If you are interested in this subject, feel free to get in touch!

<!-- markdown-link-check-disable -->
### Profiles
- [Academic Website](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

### Donate
<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

If you feel very generous, you may also buy me something from my Amazon wish list. But please donate something to developers who still go to college, before you consider buying me an item from my wish list! 😊

[Amazon wish list](https://www.amazon.de/hz/wishlist/ls/2C7RIOJPN3K5F?ref_=wl_share)
