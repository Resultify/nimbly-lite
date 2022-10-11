# Create a new module

## Steps
1. Clone existed Nimbly module or template module
2. Move the newly created module to the child theme
3. Rename if you need a new module or keep the same name if you need to adjust the existing module

## Hubspot module & theme fields best practices
https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields/best-practices

## Nimbly modules best-practice guidelines
Every module consists of two tabs `content` and `style`. You should use a content field to provide the module's meaningful content, while style fields should be used to control the module's appearance.

### Content tab
_Order and naming conventions for fields/groups in the **Content** tab_
- Follow the order of components in your module with logic names
- Keep the same order and naming for components to those we have in style tab

### Style tab
_Order and naming conventions for fields/groups in the **Style** tab_

- Each module can consist of one or more **components** (heading, image, button), which may have their own style options.
- Every component can inherit some global theme styles, which we can rewrite specifically for the particular module in the `Custom styling` group in the component options.
- Module can have a `General` group of options to change the style for all components in the module at once.
- In addition, there is a possible scenario where we may have a component inside a component that we have named a `Subcomponent`.

***

Summing up all the above we have this structure of fields or groups of fields.

### If the module consists of one component
1. `Nimbly standard Style tab ordered list of fields`
2. Subcomponent `[group]`
    - `Nimbly standard Style tab ordered list of fields`

### If the module consists of more than one component
- General module styling `[group_name: general]` **help-text:** *General styling of the whole module*
    - `Nimbly standard Style tab ordered list of fields`
- Component `[group]`
    1. `Nimbly standard Style tab ordered list of fields`
    2. Subcomponent `[group]`
        - `Nimbly standard Style tab ordered list of fields`

***

### Nimbly standard Style tab ordered list of fields

1. Presets `[group_name: presets]`
    - Unique presets options if existed `[field_name: style|size|etc]`
    - Custom preset `[field_name: custom_preset]`
2. Alignment `[group_name: alignment]`
    - Alignment `[field_name: alignment]`
3. Spacing `[group_name: spacing]`
    - Spacing `[field_name: spacing]`
4. Background `[group_name: background]`
    - Color `[field_name: color]`
4. Color `[group_name: color]`
    - Color `[field_name: color]`
7. Border `[group_name: border]`
    1. Border `[field_name: border]`
    2. Border radius `[field_name: border_radius]`
8. Other needed options `[group/field]`
9. Hover `[group_name: hover]`
    1. Background `[field_name: background]`
    2. Color `[field_name: color]`
    3. Other `[field]`
10. Custom theme overrides `[group_name: custom_styling]` **help-text:** *Override global theme settings for the whole module | Override global theme settings for the current component*
    1. Alignment `[field_name: alignment]`
    2. Spacing `[field_name: spacing]`
    3. Background `[field_name: background]`
    4. Color `[field_name: color]` **help-text:** *Text color*
    5. Font `[field_name: font]`
    6. Border `[field_name: border]`
    7. Border radius `[field_name: radius]`
    8. Other needed options `[field]`
    9. Hover `[group_name: hover]` **help-text:** *Hover settings*
        1. Background `[field_name: background]`
        2. Color `[field_name: color]` **help-text:** *Text color*
        3. Other `[field]`
