javascript: document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for buttons
    var image6 = document.getElementById("image6");
    if (image6) {
        image6.addEventListener("click", function (e) {
            window.location.href = "./landing-page.html";
        });
    }
 
    var image2 = document.getElementById("image2");
    if (image2) {
        image2.addEventListener("click", function (e) {
            window.location.href = "./sign-in-page.html";
        });
    }
 
    var sIGNINText = document.getElementById("sIGNINText");
    if (sIGNINText) {
        sIGNINText.addEventListener("click", function (e) {
            window.location.href = "./sign-in-page.html";
        });
    }
 
    var sIGNINContainer = document.getElementById("sIGNINContainer");
    if (sIGNINContainer) {
        sIGNINContainer.addEventListener("click", function (e) {
            window.location.href = "./sign-in-page.html";
        });
    }
 
    var groupButton = document.getElementById("groupButton");
    if (groupButton) {
        groupButton.addEventListener("click", function (e) {
            window.location.href = "./index.html";
        });
    }
 
    var dataInsights = document.getElementById("dataInsights");
    if (dataInsights) {
        dataInsights.addEventListener("click", function (e) {
            window.location.href = "./data-insights.html";
        });
    }
 
    var questionnaire = document.getElementById("questionnaire");
    if (questionnaire) {
        questionnaire.addEventListener("click", function (e) {
            window.location.href = "./questionnaire.html";
        });
    }
 
    var premiumPlan = document.getElementById("premiumPlan");
    if (premiumPlan) {
        premiumPlan.addEventListener("click", function (e) {
            window.location.href = "./find-your-premium.html";
        });
    }
});