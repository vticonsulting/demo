The Videa UI Framework (VUI) component library is actively developed to enable Videa developers to create a uniform look and feel across all Videa-related applications while adhering to CSS best practices and conventions.

In order to accomplish this goal, we’ve chosen to use very specific naming techniques. These allow us to keep our code base flat, with low specificity, and keeps us from fighting specificity wars that start with frustration and end with `!important`. Though we base our naming on the BEM method, we have a few additions of our own outlined below.

## BEM Naming

BEM is a well-known method of naming components — block, element, modifier. If you’re comfortable with BEM, move down to the “Where we diverge from BEM” section. For those unfamiliar or who need a quick refresh, let’s briefly look at how BEM works. As an example, we’ll build a house component.

gray house with pink door and gray steps

### Block

A block represents the main component name. If you were building a house component, the class name would be `.house`. All of the properties you want included for all houses would be included in the base `.house` class.

### Element

An element represents a part of a component and is separated by two underscores. The door of the house would be represented by the class `.house__door`. A window would be `.house__window`.

Be careful to look for smaller component possibilities within a larger component. Especially if it’s a pattern that might be repeated in an unrelated component. Avoid using a class like `.house__stair__step`. Instead, either use `.house__stair-step` (a single dash does not indicate anything in BEM and can simply be used for compound naming). Or if the stair portion of the component might be used inside another component, make the `.stair` a smaller component within the larger component and use `.stair__step` as an element of it.

### Modifier

A modifier is a component or element variation and is separated by two dashes. The variation can apply to the overall component or it can be applied to an element within the component.

Since the properties that should apply to every house are placed on the main `.house` class, all houses receive the `.house` class as the base. If there is a variation of a house — perhaps it is gray — the `.house--gray` class would be added to the component in addition to the .house class.

If the house has a pink door, a variation can be placed on the door element itself — `.house__door--pink`.

## Where we diverge from BEM

In some cases, for reasons of brevity and comprehension, we’ve added to, or deviated from, typical BEM naming conventions. These changes are outlined below.

### Utility Classes

Though BEM syntax is traditionally based off an initial block, in some cases (in our utilities) we have opted to remove that requirement. For example, margin and padding are indicated with the formula `.vui-m-top--medium` (margin, top, medium). So while there is no base `.vui-m` or `.vui-m-top` class as a base class, we feel it’s an easily understandable way to indicate that there is a size variation in these utility classes.

Our spacing utilities similarly use the syntax `.vui-size--1-of-2` without a base `.vui-size` class. Text sizing uses class names like `.vui-text-body--small` and `.vui-text-heading--large` without a base `.vui-text-body` or `.vui-text-heading` class.

### Component Containers

Though generic `.vui-container-*` classes exist, sometimes a component has an optional container — but it is specific to that component alone. Those containers should be indicated by a class using a single underscore. For example, when a .pill has an optional container applied, that class is written as `.vui-pill_container`.

### Namespacing

In order to make this framework easy to use with other frameworks, we’ve added the `.vui-` namespace. Rather than using `.button`, our framework uses `.vui-button`. This allows you to integrate the Videa UI Framework (VUI) with your own bespoke CSS or to integrate it with an application that uses another framework.


## Component States

When a component has a variety of states, we add a class to indicate the state the component, or certain portions of the component, are in. Some examples are: `.vui-is-selected`, `.vui-is-active`, `.vui-is-expanded`, `.vui-is-nested`, `.vui-is-open`, `.vui-has-focus`, `.vui-has-error`, etc.

Please address any questions about our code style or contributing to our project to our TFS issues.
