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
| text | string | Text will be shown in the center of chip |
| image | string | The image url will be shown in the left side of chip  |
| closeable | boolean |  Whether the chip can be closed. Default value is `false`. |

## Events

| name | value | description | 
| ----- | ----- | ---------- |
| stc-chip:close | void | Event triggered when user closes the chip. This event only will be triggered if closeable prop be `true` |
