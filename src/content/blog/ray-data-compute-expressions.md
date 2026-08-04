---
title: Ray Data compute expressions
description: A running log of my work on Ray Data's expression namespaces.
pubDate: 2026-06-01
updatedDate: 2026-08-04
project: Ray
tags: [ray, ray-data, systems]
log:
  - date: 2026-08-04
    note: Shipped fixed-size array support; started sketching the .image namespace.
  - date: 2026-07-10
    note: Landed datetime support in the .dt namespace (PR #58740, #58741).
  - date: 2026-06-01
    note: First draft — scoping out which namespaces to expand and why.
---

*(This is a living post — I update it as the work lands. This first paragraph is a starter;
edit it freely.)*

This is where I keep track of my ongoing work on **Ray Data compute expressions** — expanding the
`.dt` / `.arr` / `.map` / `.image` / `.uri` namespaces so you can express more transformations
directly on a dataset without dropping into Python UDFs.

Rather than write a new post every time something lands, I treat this as one topic and keep it up
to date — the **Changelog** at the bottom tracks what changed and when.

## Why expression namespaces

<!-- Write up the motivation: pushing transforms into the engine, avoiding per-row Python
overhead, keeping things vectorized, etc. -->

## What's shipped

- **datetime** (`.dt`) — component access and arithmetic on timestamp columns.
- **fixed-size arrays** (`.arr`) — element access and shape-aware ops.

## What's next

- The `.image` namespace — decode/resize without a UDF.
- The `.uri` namespace — parse and manipulate URIs.

See the tracking issue (#58674) for the full plan.
