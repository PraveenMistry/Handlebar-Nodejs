var source = $("#body-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    slug_name :"test-page",
    fields: [   
        {
        "engage": "Handlebars data Engage",
        "partner_with_team": "Handlebars data Partner With Team",
        }
    ]
}; 

$('body').append(template(data));