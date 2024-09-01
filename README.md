<p align="center">
	<img src="https://github.com/JustinMartinDev/merge-prisma-schema/blob/4e4db85caf2c0a106b9d735a28c3667381ed9f6b/logo.png" width="150" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/merge-prisma-schema">
    <img src="https://img.shields.io/npm/v/merge-prisma-schema" alt="npm version" >
  </a>
  <a href="https://nodejs.org/en/about/previous-releases">
    <img src="https://img.shields.io/node/v/merge-prisma-schema" alt="node compatibility">
  </a>
  <a href="https://github.com/JustinMartinDev/merge-prisma-schema/blob/main/package/LICENSE.md">
    <img src="https://img.shields.io/npm/l/merge-prisma-schema" alt="license">
  </a>
</p>

<h1 align="center">Merge Prisma Schema</h1>

## Overview

Merge Prisma Schema is simple tool to merge splitted prisma schema files. It allow to load partial schema from multiple location. The tool contain "validation" and "formatting" steps.

## Quick Start Guide

Install with `npm install --global merge-prisma-schema`. Merge Prisma Schema can be used either through a command line interface with an optional configuration file.

## Configuration

You can create config file `merge-prisma-schema.config.js` or `merge-prisma-schema.config.json` or put configuration into `package.json`

| name                  | description                         | default        |
| --------------------- | ----------------------------------- | -------------- |
| `schemas`             | list of schema path                 | `[]`           |
| `schemaSearchFolders` | list of folders to search schemas   | `["prisma"]`   |
| `output`              | location to store the merged schema | `"prisma/schema.prisma"` |
| `prismaCli`           | prisma CLI path                     | `"npx prisma"` |

## License

[MIT](https://github.com/JustinMartinDev/merge-prisma-schema/blob/main/package/LICENSE.md)
