---
title: On reading code you didn't write
description: Most of open source is reading, not writing. A few habits that help.
pubDate: 2026-07-15
tags: [open-source, systems, notes]
---

*(This is a starter post — edit or delete it.)*

Most of the time I spend in a codebase, I'm not writing anything. I'm reading: following a
call stack, figuring out why a test is flaky, or trying to understand a decision someone made
three years ago. A few habits have made that easier.

## Start from the failure, not the feature

When something breaks, I resist the urge to read the whole subsystem. I start at the exact
line that failed and walk outward only as far as I need to. The stack trace is a map — use it.

## Write down what you assumed

Half of debugging is discovering that something you were sure of isn't true. I keep a scratch
file of "things I believe about this code," and cross them out as I disprove them.

## Leave the campsite cleaner

If I had to spend an hour understanding a function, that's an hour the next person shouldn't
have to spend. A comment, a test, or a clearer name is usually worth the extra few minutes.

That's it. Nothing clever — just the boring habits that compound.
