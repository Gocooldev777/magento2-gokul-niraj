require.config({"config": {
        "jsbuild":{"jquery/ui-modules/ie.js":"( function( factory ) {\n\t\"use strict\";\n\n\tif ( typeof define === \"function\" && define.amd ) {\n\n\t\t// AMD. Register as an anonymous module.\n\t\tdefine( [ \"jquery\", \"./version\" ], factory );\n\t} else {\n\n\t\t// Browser globals\n\t\tfactory( jQuery );\n\t}\n} )( function( $ ) {\n\"use strict\";\n\n// This file is deprecated\nreturn $.ui.ie = !!/msie [\\w.]+/.exec( navigator.userAgent.toLowerCase() );\n} );\n"}
}});
