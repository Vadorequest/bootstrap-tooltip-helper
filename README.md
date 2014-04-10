Bootstrap tooltip helper
========================

Helper for Bootstrap 3 tooltip
http://getbootstrap.com/javascript/#tooltips

# Summary

The script applies the `tooltip` to all `.do_tooltip` elements in the page once the DOM is loaded.
It takes care to merge both the default options (`js`) and the custom options (`html5 data attributes`).

> I use `do_tooltip` because the `tooltip` class applies styles. But if you don't like the class name, change it.

## Example

`<div class="do_tooltip" data-placement="right" title="Hello world!"></div>`

> Will apply the `tooltip()` function to the div, and override the `placement`option by using the `right` value. 
> All other data attributes works the same way.
 
## Dependencies

- **Underscore.js**: Wonderful library that helps a lot to manage `arrays` and `collections` in `javascript`. http://underscorejs.org/
- **Objects merger**: Merge objects. Priority to the last object. (Erase values if same keys) https://github.com/Vadorequest/javascript-helpers/blob/master/object-merger/object_merge.js
- **Font-Awesome**: [*Optional*] The script use `font-awesome` plugin (`fa fa-question-circle`) that will add the `question-circle` icon before all tooltips. *If font-awesome is not installed, the icon won't appear*. (*close enough to glyphicon, but better :)*) https://github.com/FortAwesome/Font-Awesome/

# Installation
1. Import the script. **Must*** be imported after `underscore.js`, `object-merge.js` and `bootstrap`.

# Utilities

- **Namespace**: I didn't use any namespace because the original plugins doesn't. But if you want to, you can. This means that all data attributes will be contained in `data-{namespace_name}` namespace to avoid conflicts.
- **Case**: The case of the options doesn't matter since we `toLowerCase()` the keys, it's not possible to have html5 data attribute element with an upper character. (*but it's possible to have a key with it*)
- **Title**: If no title is found in the element (`title` attribute) then the script won't apply the `tooltip` function to the element. (*makes no sense*)
- **Icon**: It's possible to add an icon before each text. I use `font-awesome` to do so, using CSS classes, but it would be exactly the same by using `glyphicon`. You can also remove the classes and no icon will appear.
- **Icon custom**: The icon defined inside the script is the default, it's possible to add a custom icon. If your `title` attribute contains another `fa ` class then the icon won't be applied to let you use the custom and avoid to have two icons displayed.

# Data attributes

Basically the script contains all `data-attribute` in an `javascript` object with default values. All options **must** be present in this object since the script uses the keys to search in the data attributes. If a key is not present in this default config object the data-attribute associated won't be found.

# Customize

Of course, this helper could not fill entirely your needs, don't hesitate to customize it for your application. *If you think that youre changes are useful, please share/discuss/PR.*

# Contributing

This script doesn't need to evolve too much, but if the `bootstrap#tooltip` evolves and add new options then we'll need to update this helper too. You're welcome to make a **PR**, I will take a look at it as soon as possible. 

# Roadmap

1. Don't use the `object_merge` function but use `underscore` instead.
2. Make a version that doesn't require `underscore`. (*I won't, but if someone want to, feel free!*)