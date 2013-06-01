
"use string";

var simplejsonhtml = (function() {
    function transform(template, model) {
        if (typeof template === "string")
            return template;
            
        var tag = Object.keys(template)[0];
        return '<' + tag + '>' + template[tag] + '</' + tag + '>';
    };

    return {
        transform: transform
    };
})();

if (typeof window === 'undefined') {
	module.exports = simplejsonhtml;
}

