if (Meteor.isClient) {

    Template.body.events({
      "click #menu-toggle": function (event, template) {
        event.stopPropagation();
        $("#content").toggleClass("toggled");
      },
      "click #content": function (event, template) {
        event.stopPropagation();
        $("#content").addClass("toggled");
      }
    });

}
