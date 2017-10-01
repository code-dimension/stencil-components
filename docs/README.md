# Stencil Components

Web components built on top StencilJS

## Components

### Chip

Simple chip

```html
    <stc-chip text="simple chip"></stc-chip>
```

<div>
    <stc-chip text="simple chip"></stc-chip>
</div>

Closeable chip

```html
    <stc-chip text="closeable chip" closeable></stc-chip>
```

<div>
    <stc-chip text="closeable chip" closeable></stc-chip>
</div>

Chip with image

```html
    <stc-chip image="/assets/images/stenciljs.jpg" text="image chip"></stc-chip>
```

<div>
    <stc-chip image="{{ "/assets/images/stenciljs.jpg" | relative_url }}" text="image chip"></stc-chip>
</div>

