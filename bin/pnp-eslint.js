#!/usr/bin/env node
process.argv.push('--resolve-plugins-relative-to', __dirname);
require('eslint/bin/eslint');
