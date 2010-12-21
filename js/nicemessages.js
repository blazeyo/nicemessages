// $Id$

/**
 *  Displays messages with jGrowl.  
 */
Drupal.behaviors.nicemessages = {
  attach: function () {
    if (Drupal.settings.nicemessages.items) {
      for (i in Drupal.settings.nicemessages.items) {
        jQuery.jGrowl(Drupal.settings.nicemessages.items[i].content, {
          life: 4000,
          theme: Drupal.settings.nicemessages.items[i].type,
          sticky: jQuery('a', Drupal.settings.nicemessages.items[i].content).size() || 
            Drupal.settings.nicemessages.items[i].type == 'error' || 
            Drupal.settings.nicemessages.items[i].type == 'warning' || 
            jQuery(Drupal.settings.nicemessages.items[i].content).text().length > 100 ? true : false
        });
      }
    }
  }
}