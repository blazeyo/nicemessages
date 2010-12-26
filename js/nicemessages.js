// $Id$

/**
 *  Displays messages with jGrowl.  
 */
Drupal.behaviors.nicemessages = {
  attach: function () {
    jQuery.jGrowl.defaults.position = Drupal.settings.nicemessages.position;
    if (Drupal.settings.nicemessages.items) {
      for (i in Drupal.settings.nicemessages.items) {
        jQuery.jGrowl(Drupal.settings.nicemessages.items[i].content, {
          life: Drupal.settings.nicemessages.items[i].life,
          glue: Drupal.settings.nicemessages.items[i].glue,
          speed: Drupal.settings.nicemessages.items[i].speed,
          theme: Drupal.settings.nicemessages.items[i].type,
          sticky: Drupal.settings.nicemessages.items[i].life == 0
        });
      }
      delete Drupal.settings.nicemessages.items;
    }
  }
}