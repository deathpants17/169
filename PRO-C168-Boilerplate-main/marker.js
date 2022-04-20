AFRAME.registerComponent("markerhandler", {
  init: async function () {

    this.el.addEventListener("markerFound", () => {
      console.log("marker is found")
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost")
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("rating-button");

    // Handling Click Events
    ratingButton.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Rate Dish",
        text: "Work In Progress"
      });
    });

    
  },

  handleMarkerLost: function () {
  
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});