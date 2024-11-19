# Contribution Guidelines

Extro is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and enhancements are all listed on the [issues](https://github.com/turbostarter/extro/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests. Easy bugs and features will be tagged with the `good first issue` label.

## Issues

If you encounter a bug, please file a [bug report](https://github.com/turbostarter/extro/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml&title=%5BBug%5D%3A+). If you have a feature to request, please open a [feature request](https://github.com/turbostarter/extro/issues/new?assignees=&labels=request&projects=&template=feature_request.yml&title=%5BFeature%5D%3A+). If you would like to work on an issue or feature, there is no need to request permission.

## Pull Requests

In order to create a pull request for Extro, follow the GitHub instructions for [creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## File Structure

Description of the project files and directories.

```bash
├── .github/                      # Github related files (workflows, templates)
├── .husky/                       # Husky config
├── .vscode/                      # VSCode settings (extensions, settings)
├── src/                          # Source code for the extension
│    ├── app/                     # Entry files for each part of the extension (background, popup, options, etc.)
│    ├── assets/                  # Static assets (fonts, images, svgs, etc.)
│    ├── components/              # Shared components
│    ├── lib/                     # Utility functions and third-party libraries
│    ├── public/                  # Public assets (fonts, locales, etc.)
│    ├── types/                   # TypeScript types
│    └── typings/                 # Custom type definitions
├── .cursorrules                  # Cursor rules
├── .env.example                  # Examples of env variables
├── .gitignore                    # Files ignored by git
├── biome.json                    # Biome configuration
├── bun.lockb                     # Bun lockfile
├── commitlint.config.ts          # Config for CommitLint - to enforce commit consistency
├── components.json               # shadcn/ui configuration
├── package.json                  # Dependencies and additional informations about the project
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
├── wxt.config.ts                 # WXT configuration
```

### `/app`

Extro ships with the following extension pages preconfigured:

- `background` - [background service worker](https://wxt.dev/guide/essentials/entrypoints.html#background)
- `content` - [content scripts](https://wxt.dev/guide/essentials/content-scripts.html) that run in the context of web pages
- `devtools` - [devtools](https://wxt.dev/guide/essentials/entrypoints.html#devtools) page with custom panels
- `newtab` - [new tab](https://wxt.dev/guide/essentials/entrypoints.html#newtab) page
- `options` - [options](https://wxt.dev/guide/essentials/entrypoints.html#options) page
- `popup` - [popup](https://wxt.dev/guide/essentials/entrypoints.html#popup) window
- `sidepanel` - [side panel](https://wxt.dev/guide/essentials/entrypoints.html#side-panel)
- `tabs` - [unlisted](https://wxt.dev/guide/essentials/entrypoints.html#unlisted-pages) pages (custom pages delivered with the extension)

## Styleguide

Coding conventions are enforced by [Biome](biome.json).

- Semicolons
- Double quotes
- `const` preferred over `let`
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Two space indentation
- React: functional style with Hooks (no classes)
- Trailing commas in arrays and objects
- [Non-default exports](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) are preferred for components
- Module imports are ordered and separated: **built-in** -> **external** -> **internal** -> **css/assets/other**
- TypeScript: strict mode, with no implicitly any

## Example component structure

```bash
├── component/
│   ├── component.tsx
```

```tsx
import { memo } from "react";

interface ComponentProps = {
  readonly title: string;
};

export const Component = memo<ComponentProps>(({ title }) => {
  return <h1>{title}</h1>;
});

Component.displayName = "Component";
```


## Tech stack

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
