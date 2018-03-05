# Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.

Handlebar's npm package includes both libraries suitable for CommonJS aware systems and built browser libraries that can be consumed direct browser mechanisms.

## NPM
	npm install handlebars -g 		// install globally
	npm install --save handlebars 	

## Bower
	bower install --save handlebars

## Download handlebarsjs: 
	https://cdnjs.com/libraries/handlebars.js

## Compile a template in JavaScript by using Handlebars.compile

	```
	var source   = document.getElementById("body-template").innerHTML;
	var template = Handlebars.compile(source);
	```

## Get the HTML result of evaluating a Handlebars template by executing the template with a context.

	```
	var context = { 
				    slug_name :"test-page",
				    fields: [   
				        {
				        "engage": "Handlebars data Engage",
				        "partner_with_team": "Handlebars data Partner With Team",
				        }
				    ]
				};

	var html    = template(context);
	```

## Create a html page ( test.html ) 

	```
		<script id="body-template" type="text/x-handlebars-template"> <table>
			<div class="row">
			 	<div class="">
			 		<h1>Slug</h1>
			 		<p>{{slug_name}}</p>
			 	</div>
			 	{{#fields}}
			    <div class="">
			        <h2>Engage: </h2>
					<p>{{engage}}</p>
					<h3>Partner With TEAM: </h3>
					<p>{{partner_with_team}}</p>
			    </div>
		      	{{/fields}}
		    </div>
		</script>
	```

## Create a js file  ( script.js ) 

	```
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
	```

	