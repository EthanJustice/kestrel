# kestrel

General browser utilities.

![Kestrel's Icon](https://raw.githubusercontent.com/EthanJustice/kestrel/master/src/icons/icon.png)

There's not much implemented right now, and what is is somewhat simplistic.  More complicated features are coming.

The extension hasn't been submitted to FireFox addons just yet, but once some of the markers in the roadmap are hit and a lot more commands/features are added, it will be.  Stabilitiy also needs to be improved before I'll submit it.

## How Permissions are Used

See [Features](#features).

## Features

+ Disable all links [none]
+ Hide media (images/video) [none]
+ Open all links in the same tab [none]
+ Settings [none]
+ Refresh tabs [tabs]
+ Scroll to *x* [none]
+ Show media (images/video) [none]
+ Toggle animations [none]
+ Edit page [none] {in-progress}
+ Mini-map [none] {in-progress}

## Usage

There's not much to see right now.  The main part is activated with `Alt+Shift+Q` on everything but Linux, which is `Alt+Shift+Q`.  Why Q?  All the keys can be hit with one hand.

### Development

1. Download Kestrel
2. Go to `about:debugging`
3. Click on `This Firefox`
4. Click on `Load Temporary Add-on...`
5. Navigate to wherever you downloaded Kestrel and open `src/manifest.json` in the prompt
6. You're good to go!

## Roadmap

+ Performance Testing with *about:performance* [meta]

## High

+ Dynamic permission requests [feature]
+ Security [bug] {in-progess}

## Medium

+ Refactoring [meta]
+ User-set activation/close command [feature]
+ Better onboarding/user-friendly docs [meta] {in-progress}
+ Homepage [meta] {in-prog}
+ Changelog notification [feature]
+ Config exporter [feature]

## Low

+ Rename `/src/pages/fresh` to `guide`
+ Debugging/error centre [feature] (further down the road, more for user error reports)
+ [Possible] Move `/themes` into `/libs` [meta]
+ Styling updates to loader [bug]
+ Disable links when `design mode` command is active [bug]
+ Fix injection styling inconsistencies [bug] {in-progress}
+ Mini-map customisation

### Completed

+ ~~Move "Open all links in the current tab," command to automatic functions [bug]~~
+ ~~Add mini-map as an automatic task and command [feature/bug]~~
+ ~~Loader height setting~~ [feature]
+ ~~Options page and browser storage for settings~~ [feature]
+ ~~Split settings page files~~ [meta]
+ ~~Better folder naming~~ [meta]
+ ~~Refactor `Hide/Show Media` commands into `Toggle Media`~~ [meta]
+ ~~Colour preview for loader bar~~ [feature/bug]

I also have a list of other features I'm working on that I'll port over when I can.

## Docs

File structure

```plaintext
readme.md - meta information
license - MIT
    /meta/ - meta
        /icon - icon generation files
            index.html - icon generation
    /src/ - extension
        manifest.json - WebExtension manifest
        /background - background scripts
            main.js - primary background script, controls injection logic
        /cs - content scripts
            /automatic - automatic content scripts, injected at page load
            auto.js - things that run automatically
            kestrel.js - logic for commands
            ui.css - styling for command palette
            ui.js - logic for command palette
        /icons - kestrel icons
        /injections - files for commands that require injections
            /minimap - injection files for minimap command
        /libs - libraries and files used across multiple folders
            commands.js - list of commands, aliases, and callbacks
            taita.js - command palette logic processor
            utils.js - utility
        /pages
            /settings - extension settings page
                index.css - settings page styling
                index.html - settings page
                update.js - settings page logic
            /media - images
            /fresh - kestrel guide
            /reference - kestrel reference
        /themes - reusable themes
            dark.css - dark theme variables
            light.css - light theme variables
```

Messaging between extension parts

```plaintext
background -> ui.js/kestrel.js
+ Showing/hiding UI (because Kestrel uses the Command API, rather than a DOM event)
+ Initial handshake (needs to be expanded on in the future)

ui.js/kestrel.js -> background
+ (kestrel.js) Settings command - open settings
+ (kestrel.js) Hard/soft refresh command - has to query and refresh all tabs
+ (kestrel.js) Minimap command - injects minimap styles and scripts

auto.js -> background
+ Injects scripts that run automatically
```

Extension storage (all are customised in the options page)

```plaintext
automatic - automatic tasks, and whether they're enabled

automaticsettings - settings for automatic tasks

commands - all commands, and whether they're enabled

theme - string - kestrel's theme (light, dark, or operating-system-default, which uses the (prefers-color-scheme) media query)
```

## License

MIT
