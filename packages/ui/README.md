# @repo/ui

The Basis component library. Built with React 19, Tailwind CSS v4, and TypeScript. Documented in Storybook and deployed to Chromatic.

## Components

| Component | Variants |
|---|---|
| `Button` | `primary`, `secondary`, `ghost`, `danger` · sizes: `sm`, `md`, `lg` |
| `Card` | `elevated`, `outlined`, `ghost` · padding: `none`, `sm`, `md`, `lg` |
| `Input` | — |

## Usage

```tsx
import { Button, Card } from "@repo/ui";
import "@repo/ui/styles";

export default function Example() {
  return (
    <Card variant="outlined">
      <Card.Header>Hello</Card.Header>
      <Card.Footer>
        <Button variant="primary">Click me</Button>
      </Card.Footer>
    </Card>
  );
}
```

## Development

```bash
# Watch mode — rebuilds on changes
pnpm --filter @repo/ui dev

# Build
pnpm --filter @repo/ui build
```

## Documentation

Components are documented in Storybook.

```bash
pnpm --filter @repo/ui storybook
```