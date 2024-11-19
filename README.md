<div align="center">
 
 <br />
  <br />

<picture>
    <source media="(prefers-color-scheme: dark)" width="700" srcset="https://github.com/user-attachments/assets/09cf4bfb-36a5-4eda-a892-4ba737d6a531" />
    <source media="(prefers-color-scheme: light)" width="700" srcset="https://github.com/user-attachments/assets/7ccbabbf-5ddd-4cf0-9e44-cfbc5ba72e06" />
    <img alt="Logo" width="700" src="https://github.com/user-attachments/assets/09cf4bfb-36a5-4eda-a892-4ba737d6a531" />
</picture>

<br />
<br />
<br />

![](https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)

![GitHub action badge](https://github.com/turbostarter/extro/actions/workflows/tests.yml/badge.svg)
![GitHub action badge](https://github.com/turbostarter/extro/actions/workflows/publish.yml/badge.svg)

![GitHub license](https://img.shields.io/github/license/turbostarter/extro)
<a href="https://discord.gg/KjpK2uk3JP" target="_blank"><img src="https://discord.com/api/guilds/1280456871693779006/widget.png"/></a>

> This boilerplate
> has [Plasmo version](https://github.com/turbostarter/extro/tree/plasmo)

</div>

<p align="center">
    <a href="#features"><strong>Features</strong></a> · 
    <a href="#tech-stack"><strong>Tech stack</strong></a> · 
    <a href="#contributing"><strong>Contributing</strong></a> ·
    <a href="#getting-started"><strong>Getting started</strong></a> ·
    <a href="#community"><strong>Community</strong></a> ·
    <a href="#star-history"><strong>Star History</strong></a>
  </p>


  Everything you need to build a production ready browser extension, it's an **opinionated** stack based on learnings from building multiple browser extensions using the latest React framework. It's a starter kit with a focus on code reuse and best practices that will grow with your business.

> [!NOTE]
> This project is listed on [Awesome Open Source Boilerplates](https://github.com/EinGuterWaran/awesome-opensource-boilerplates) and [Awesome SaaS Boilerplates](https://github.com/smirnov-am/awesome-saas-boilerplates)


> [!TIP]
> Sharing storage and authentication session between all pages
>
> https://github.com/user-attachments/assets/970eddf8-5faf-42cc-89ed-54b7c7548bc8


## Features ✨ <a name="features"></a>

- 🔒 Full type-safety with Typescript
- 📄 All pages (background, popup, options etc.)
- 📜 Content scripts (UI)
- 🔐 Authentication (OAuth)
- 💾 Storage
- 💬 Messaging
- 🔥 Hot reloading
- 🚀 One-click publishing
- 🌍 Internationalization
- 📊 Analytics
- ✨ Linting and formatting
- 🧪 Unit tests
- 🔄 CI/CD pipelines
- ⚙️ Environment variables
- 🎨 shadcn/ui compatible
- 🔤 Custom fonts
- 🤖 Native AI integration (experimental)
- ✨ [ts-reset](https://github.com/mattpocock/ts-reset) for enhanced DX
- 💳 Billing (coming soon)

## Tech stack 🛠️ <a name="tech-stack"></a>

| Tech                                           | Description                                                                   |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/)  | Static type-checking programming language                                     |
| [React](https://reactjs.org/)                  | Library for building user interfaces                                          |
| [WXT](https://wxt.dev/)                        | Next-gen Web Extension Framework                                              |
| [Supabase](https://supabase.com/)              | Open source Firebase alternative                                              |
| [shadcn/ui](https://ui.shadcn.com/)            | Extendable component library                                                  |
| [Tailwind](https://tailwindcss.com/)           | Utility-first CSS framework                                                   |
| [OpenPanel](https://openpanel.dev/)            | Open source analytics                                                         |
| [React Hook Form](https://react-hook-form.com) | Forms with easy-to-use validation                                             |
| [Vite](https://vitejs.dev/)                    | Next generation frontend tool                                                 |
| [Bun](https://bun.sh/)                         | Package manager and build tool                                                |
| [Husky](https://github.com/typicode/husky)     | Git hooks                                                                     |
| [Biome](https://biomejs.dev/)                  | Linting and formatting                                                        |

## Contributing 🤝 <a name="contributing"></a>

Please read [CONTRIBUTING.md](./CONTRIBUTING.md).

## Getting started 🚀 <a name="getting-started"></a>

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

1. Clone the repository

```bash
git clone git@github.com:turbostarter/extro.git
```

2. Install dependencies

```bash
bun install
```

3. Copy `.env.example` to `.env` and update the variables

```bash
cp .env.example .env
```

### Development

#### Chrome

1. Run development server

```bash
bun dev:chrome
```

2. Open Chrome and go to `chrome://extensions`
3. Check `Developer mode`
4. Click `Load unpacked`
5. Select the `build/chrome-mv3` directory at root

#### Firefox

1. Run development server

```bash
bun dev:firefox
```

2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click `Load Temporary Add-on...`
4. Select the `build/firefox-mv2/manifest.json` file at root

> [!NOTE]  
> In Firefox you're adding a plugin in _temporary_ mode - that means it'll disappear after you close the browser.

### Publishing

#### Manual

1. Run `bun run build` to build the extension for both Chrome and Firefox or `bun build:chrome` or `bun build:firefox` to build only for one of the browsers.
2. Go to the `build` directory and upload the `.zip` files to the Chrome Web Store and Firefox Add-ons.

#### CI/CD

1. Obtain all the [required API keys](https://wxt.dev/guide/essentials/publishing.html#github-action) for your submission (check the [official token guide](https://github.com/PlasmoHQ/bms/blob/main/tokens.md) to learn more about the tokens required to submit)
2. Set your API keys as [Github secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) under appropriate names
3. Run `CI / Publish` workflow

### Pages

Extro ships with the following extension pages preconfigured:

- `background` - [background service worker](https://wxt.dev/guide/essentials/entrypoints.html#background)
- `content` - [content scripts](https://wxt.dev/guide/essentials/content-scripts.html) that run in the context of web pages
- `devtools` - [devtools](https://wxt.dev/guide/essentials/entrypoints.html#devtools) page with custom panels
- `newtab` - [new tab](https://wxt.dev/guide/essentials/entrypoints.html#newtab) page
- `options` - [options](https://wxt.dev/guide/essentials/entrypoints.html#options) page
- `popup` - [popup](https://wxt.dev/guide/essentials/entrypoints.html#popup) window
- `sidepanel` - [side panel](https://wxt.dev/guide/essentials/entrypoints.html#side-panel)
- `tabs` - [unlisted](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-pages) pages (custom pages delivered with the extension)

## Community 💬 <a name="community"></a>

To chat with other community members, you can join the [Discord](https://discord.gg/KjpK2uk3JP) server.
You can ask questions on that server, and you can also help others.

Also, suggest new features or share any challenges you've faced while developing Chrome extensions!

## Star History 🌟 <a name="star-history"></a>

<a href="https://star-history.com/#turbostarter/extro&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=turbostarter/extro&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=turbostarter/extro&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=turbostarter/extro&type=Date" />
 </picture>
</a>


---

Made with ❤️ by [Bartosz Zagrodzki](https://zagrodzki.me)
