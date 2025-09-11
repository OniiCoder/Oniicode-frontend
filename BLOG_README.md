# Blog System Documentation

## Overview
This blog system uses markdown files to store articles and automatically renders them on the website. Each article is a markdown file with frontmatter metadata.

## Adding New Articles

### 1. Create a Markdown File
Create a new `.md` file in the `src/data/blog/` directory. The filename will become the URL slug.

### 2. Add Frontmatter
Each markdown file must start with frontmatter (YAML between `---` lines):

```markdown
---
title: "Your Article Title"
date: "2024-01-01"
author: "Your Name"
excerpt: "A brief description of your article"
slug: "your-article-slug"
tags: ["tag1", "tag2", "tag3"]
---

Your article content goes here...
```

### 3. Required Fields
- `title`: The article title
- `date`: Publication date (YYYY-MM-DD format)
- `author`: Author name
- `excerpt`: Brief description for the listing page
- `slug`: URL-friendly version of the title (optional, defaults to filename)
- `tags`: Array of tags for categorization (optional)

### 4. Content
Write your article content in markdown below the frontmatter. You can use:
- Headers (`#`, `##`, `###`)
- Bold and italic text
- Lists (bulleted and numbered)
- Links
- Code blocks
- And all other standard markdown features

## File Structure
```
src/
├── data/
│   └── blog/
│       ├── article-1.md
│       ├── article-2.md
│       └── ...
├── lib/
│   └── posts.js          # Utility functions for parsing markdown
└── app/
    └── (guest)/
        └── blog/
            ├── page.js           # Blog listing page
            └── [id]/
                └── page.js       # Individual article page
```

## How It Works
1. The `posts.js` utility reads all markdown files from `src/data/blog/`
2. It parses the frontmatter and converts markdown to HTML
3. The blog listing page displays all articles with metadata
4. Individual article pages render the full content
5. Articles are automatically sorted by date (newest first)

## Example Article
See `src/data/blog/finding-my-way-back-to-unwinding.md` for a complete example.
