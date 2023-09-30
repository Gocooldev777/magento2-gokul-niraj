require.config({"config": {
        "jsbuild":{"jquery/ui-modules/version.js":"( function( factory ) {\n\t\"use strict\";\n\n\tif ( typeof define === \"function\" && define.amd ) {\n\n\t\t// AMD. Register as an anonymous module.\n\t\tdefine( [ \"jquery\" ], factory );\n\t} else {\n\n\t\t// Browser globals\n\t\tfactory( jQuery );\n\t}\n} )( function( $ ) {\n\"use strict\";\n\n$.ui = $.ui || {};\n\nreturn $.ui.version = \"1.13.0\";\n\n} );\n"}
}});
