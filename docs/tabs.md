# Tabs

Component useful to show content through tabs.

selector: `stc-tabs`

## How to use

Use the component `stc-tab-header` for render a tab header and the component `stc-tab-content` to render the tab header content. 

The prop **name** value should be equal for `stc-tab-header` and `stc-tab-content`.

```html
<stc-tabs> 
  <stc-tab-header slot="header" name="tab1">Tab 1</stc-tab-header>
  <stc-tab-header slot="header" name="tab2">Tab 2</stc-tab-header>

  <stc-tab-content slot="content" name="tab1">
     Content 1
  </stc-tab-content>

  <stc-tab-content slot="content" name="tab2">
     Content 2
  </stc-tab-content>

</stc-tabs>
```

<div class="demo-container">
    <stc-tabs> 
        <stc-tab-header slot="header" name="tab1">Tab 1</stc-tab-header>
        <stc-tab-header slot="header" name="tab2">Tab 2</stc-tab-header>
        <stc-tab-content slot="content" name="tab1">
            Content 1
        </stc-tab-content>
        <stc-tab-content slot="content" name="tab2">
            Content 2
        </stc-tab-content>
    </stc-tabs>
</div>

## Tab Content

### Props

| name | type | description |
| ------ | ------ | ----------- | 
| name | string | Identifier for group the content with header has same name |


## Tab Header

### Props

| name | type | description |
| ------ | ------ | ----------- | 
| name | string | Identifier for group the header with content has same name |
