# Tags

Component useful to manage tags. 

selector: `stc-tags`

## How to use

Basic usage

```html
<stc-tags></stc-tags>
```

<div class="demo-container">
    <stc-tags></stc-tags>
</div>

Adding a custom placeholder

```html
<stc-tags placeholder="My custom placeholder"></stc-tags>
```

<div class="demo-container">
    <stc-tags placeholder="My custom placeholder"></stc-tags>
</div>

Adding tags on load

```html
<stc-tags placeholder="My custom placeholder"></stc-tags>
```
```js
document.querySelector('stc-tags').tags = [{ text: 'first tag' }];
```

<div id="adding-onload" class="demo-container">
    <stc-tags placeholder="My custom placeholder"></stc-tags>
</div>

<script>
    document.querySelector('#adding-onload stc-tags').tags = [{ text: 'first tag' }];
</script>

Adding tags after delay

```html
<stc-tags placeholder="My custom placeholder"></stc-tags>
```
```js
setTimeout(() => {
    document.querySelector('stc-tags').tags = [{ text: 'first tag' }];
}, 2000)
```

<div class="demo-container">
    <button onclick="runDelay()">Run</button>
</div>

<div id="adding-after-delay" class="demo-container">
    <stc-tags placeholder="My custom placeholder"></stc-tags>
</div>

<script>
    function runDelay() {
        setTimeout(() => {
            document.querySelector('#adding-after-delay stc-tags').tags = [{ text: 'first tag' }];
        }, 2000)
    }
</script>


## Props

| name | type | description |
| ------ | ------ | ----------- | 
| tags | { text: string, image?: string }[] | Tag list will be rendered |
| placeholder | string | Custom placeholder of internal input element |

## Events

| name | data | description |
| ------ | ------ | ----------- | 
| stc-tags-close | { text: string, image?: string, id: string } | Event triggered when a tag is closed |
