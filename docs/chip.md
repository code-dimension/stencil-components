# Chip

Component useful to render some info like topics, classifications, etc.

selector: `stc-chip`

## How to use

This component can render a chip with an image and with a close icon (closeable) as well. The default chip configuration show just a text.

Simple chip

```html
    <stc-chip text="simple chip"></stc-chip>
```

<div class="demo-container">
    <stc-chip text="simple chip"></stc-chip>
</div>

Closeable chip

```html
    <stc-chip text="closeable chip" closeable></stc-chip>
```

<div class="demo-container">
    <stc-chip text="closeable chip" closeable></stc-chip>
</div>

Chip with image

```html
    <stc-chip image="/assets/images/stenciljs.jpg" text="image chip"></stc-chip>
```

<div class="demo-container">
    <stc-chip image="{{ "/assets/images/stenciljs.jpg" | relative_url }}" text="image chip"></stc-chip>
</div>

## Props

| name | type | description | 
| ----- | ----- | ---------- |
| text | string | Text will be showed in the center of chip |
| image | string | Url image will be showed on the left side of chip  |
| closeable | boolean |  Whether the chip can be closed. Default value is `false`. |

## Events

| name | value | description | 
| ----- | ----- | ---------- |
| stc-chip:close | void | Event trigged when user close the chip. This event only will be trigged if closeable prop be `true` |
