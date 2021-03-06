/**
 * This script run when the DOM is loaded and change all elements that contains the do_tooltip class.
 * For all elements, it will apply a tooltip that will merge both default options and custom options.
 * Default options are defined in this script while custom options are defined as HTML5 data attributes.
 *
 * All data attributes are usable. They have either our custom default value or the bootstrap default values.
 * If you don't apply the do_tooltip class, the tooltip will be generated by bootstrap anyway, but won't use the our default options.
 * And the time required to display the tooltip is higher if the do_tooltip class is NOT used.
 *
 * @example
 * button_tag space(t('next'), true), class: 'btn btn-next do_tooltip', title: t('next_step'), 'data-placement' => 'right'
 *
 * @see http://getbootstrap.com/javascript/#tooltips
 */
$(function(){
  // Html5 data attribute namespace. Ex: data-tooltip-animation => 'tooltip' is the namespace.
  var namespace = '';

  // Default options for the whole application.
  var tooltipOptions = {
    animation: true,
    html: true,
    placement: 'top',
    selector: false,
    trigger: 'hover focus',
    title: '',
    delay: {
      show: 0,
      hide: 0
    },
    container: false
  };

  var icon = '<span class="fa fa-question-circle" />';

  _.map($('.do_tooltip'), function(element){
    // Will contain the custom options (defined by css for the input itself).
    var customOptions = {};

    // Don't apply tooltip if there is no title.
    if(typeof $(element).attr('title') != 'undefined'){
      // Add icon only if no icon exists to allow override. Use the font-awesome class.
      if($(element).attr('title').indexOf('fa ') == -1){
        $(element).attr('title', icon + ' ' + $(element).attr('title'));
      }

      // For each attributes use the data-{attr} value if defined.
      _.map(_.keys(tooltipOptions), function(attr){
        // Use the namespace if defined. Html5 data attributes don't use Upper case, but keys could.
        var attr_name = ((namespace ? namespace + '-' : '') + attr).toLowerCase();
        if(typeof $(element).data(attr_name) !== 'undefined') customOptions[attr] = $(element).data(attr_name);
      });

      // Merge default and custom options and apply the tooltip.
      $(element).tooltip(object_merge(tooltipOptions, customOptions));
    }
  });
});