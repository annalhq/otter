<div align="center">

  <h1>🦦<br/>Otter</h1>

> Otter is a simple bookmark manager made with [Next.js](https://nextjs.org)

  <p>
    <a
      href="https://github.com/MrMartineau/otter/blob/master/LICENSE"
    >
      <img
        src="https://img.shields.io/badge/license-MIT-blue.svg"
        alt="otter is released under the MIT license."
      />
    </a>
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs welcome!"
    />
    <a href="https://twitter.com/intent/follow?screen_name=MrMartineau">
      <img
        src="https://img.shields.io/twitter/follow/MrMartineau.svg?label=Follow%20@MrMartineau"
        alt="Follow @MrMartineau"
      />
    </a>
  </p>

  <p>
    <a href="#getting-started">Getting started</a> •
    <a href="#docs">Docs</a>
  </p>
</div>

## Getting started

1. Install dependencies with [pnpm](https://pnpm.io): `pnpm install`
2. Setup env vars (see below)
3. Run the app locally using `pnpm dev`

### Env vars

Set up the fillowing env vars. For local development you can set them in a `.env.local` file. See an example [here](../../examples/nextjs/.env.local.example)).

```bash
# Find these in your Supabase project settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Docs

### API Endpoints

- `POST /api/new` - create new item in Otter
- `GET /api/new?url=https://example.com` - quick create new item in Otter. Pass in a `url` query param and it will create a new item with that URL and includes its metadata too
- `GET /api/bookmarks` - returns all bookmarks
<!-- - `GET /api/bookmarks/:id` - returns a single bookmark -->
- `GET /api/search?searchTerm=zander` - search bookmark

### Bookmarks

#### Adding new bookmark types

1. Add the new type to the types enum `ALTER TYPE type ADD VALUE '???';`
2. Add a new `case` to the `TypeToIcon` component
3. Add a new `TypeRadio` component to the `BookmarkForm` component
4. Add a new value to `BookmarkType` type

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by Zander • [zander.wtf](https://zander.wtf) • [GitHub](https://github.com/mrmartineau/) • [Twitter](https://twitter.com/mrmartineau/)
