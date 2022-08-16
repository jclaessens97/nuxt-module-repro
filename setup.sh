#!/bin/bash

pnpm i
pnpm run dev:lib:prepare
pnpm run prepack:lib

cd packages/nuxt-app
pnpm i
pnpm run dev

