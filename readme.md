# Tailwind CSS Column-Rule

This plugin adds utilities to use `column-rule` properties with Tailwind CSS.

## Installation

Add this plugin to your project:

```bash
# Install using npm
npm install --save-dev @mellambias/tailwind-column-rule
```

### Add the plugin to file config

```js
// tailwind.config.js
{
  plugins: [
    require('@mellambias/tailwind-column-rule'),
  ],
}
```

This plugin adds utilities to use **column-rule-width**, **column-rule-style**, and **column-rule-color** properties with Tailwind CSS.

## column-rule-width

The `column-rule-width` CSS property sets the width of the line drawn between columns in a multi-column layout.

By default the plugin uses the **borderWidth** properties from your `theme` to generate the utilities for controlling de line weight

| Class    | Properties              |
| -------- | ----------------------- |
| rule-w-0 | column-rule-width: 0px; |
| rule-w-2 | column-rule-width: 2px; |
| rule-w-4 | column-rule-width: 4px; |
| rule-w-8 | column-rule-width: 8px; |
| rule-w   | column-rule-width: 1px; |

### Applying conditionally

You let conditionally apply utility classes in different states using [variant modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states).

```html
<div class="hover:rule-w-0">
  <!-- ... -->
</div>
```

### Breakpoints and media queries

You can also use variant modifiers to target [media queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-queries)

```html
<div class="md:rule-w-3">
  <!-- ... -->
</div>
```

### Customizing your theme

By default, this plugin provides five border-width utilities. You change, add, or remove these by editing the **theme.borderWidth** section of your Tailwind config. Or the plugin **theme.ruleWidth**

```js
// tailwind.config.js
{
  theme: {
    ruleWidth: {
        10: "10px",
    },
  plugins: [
    require('@mellambias/tailwind-column-rule'),
  ],
}
```

### Arbitrary values

If you need to use a one-off rule-w-{width} value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

```html
<div class="rule-w-[15px]">
  <!-- ... -->
</div>
```

## column-rule-style

The `column-rule-style` CSS property sets the style of the line drawn between columns in a multi-column layout.

By default the plugin uses the **ruleStyle** properties from your `theme` to generate the utilities for controlling de line style.

| Class             | Properties                 |
| ----------------- | -------------------------- |
| rule-style-solid  | column-rule-style: solid;  |
| rule-style-dashed | column-rule-style: dashed; |
| rule-style-dotted | column-rule-style: dotted; |
| rule-style-double | column-rule-style: double; |
| rule-style-hidden | column-rule-style: hidden; |
| rule-style-none   | column-rule-style: none;   |

### Applying conditionally

You let conditionally apply utility classes in different states using [variant modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states).

```html
<div class="hover:rule-style-dotted">
  <!-- ... -->
</div>
```

### Breakpoints and media queries

You can also use variant modifiers to target [media queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-queries)

```html
<div class="md:rule-style-double">
  <!-- ... -->
</div>
```

### Customizing your theme

By default, this plugin provides five border-width utilities. You change, add, or remove these by editing the **theme.ruleStyle** section of your Tailwind config.

```js
// tailwind.config.js
{
  theme: {
    ruleStyle: {
        "groove": "groove",
    },
  plugins: [
    require('@mellambias/tailwind-column-rule'),
  ],
}
```

## column-rule-color

The `column-rule-color` CSS property sets the color of the line drawn between columns in a multi-column layout.

By default the plugin uses the **colors** properties from your `theme` to generate the utilities for controlling de line color.

| Class                  | Properties                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| rule-color-inherit     | column-rule-color: inherit;                                                                    |
| rule-color-current     | column-rule-color: current;                                                                    |
| rule-color-transparent | column-rule-color: transparent;                                                                |
| rule-color-black       | column-rule-color: rgb(0 0 0);                                                                 |
| rule-color-white       | column-rule-color: rgb(255 255 255);                                                           |
| rule-color-slate-50    | column-rule-color: rgb(248 250 252);                                                           |
| Color palette          | [Default color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) |

### Applying conditionally

You let conditionally apply utility classes in different states using [variant modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states).

```html
<div class="hover:rule-color-red-800">
  <!-- ... -->
</div>
```

### Breakpoints and media queries

You can also use variant modifiers to target [media queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-queries)

```html
<div class="md:rule-color-green-500">
  <!-- ... -->
</div>
```

### Customizing your theme

By default, this plugin provides five border-width utilities. You change, add, or remove these by editing the **theme.borderWidth** section of your Tailwind config. Or maybe de plugin **theme.ruleWidth**

By default, this plugin makes the entire [default color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) available as rule colors. You can customize your color palette by editing **theme.colors** or **theme.extend.colors** in your tailwind.config.js file.
Or the plugin **theme.ruleColor**

```js
// tailwind.config.js
{
  theme: {
      ruleColor: {
        red: "red",
      },
  plugins: [
    require('@mellambias/tailwind-column-rule'),
  ],
}
```

### Arbitrary values

If you need to use a one-off rule-color-{color} value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

```html
<div class="rule-color-[blue]">
  <!-- ... -->
</div>
```
