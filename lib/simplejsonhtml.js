
"use string";

var simplejsonhtml = (function() {
    function evaluate(expr, model) {
        var text = "with (model) { return " + expr + " }";
        var func = new Function("model", text);
        return func.apply(null, [model]);
    };
    
    function evaluateText(text, model) {
        var p = text.indexOf("${");
        
        if (p < 0)
            return text;
            
        var p2 = text.indexOf("}", p);
        
        if (p2 < 0)
            return text;
            
        var expr = text.substring(p + 2, p2);
        return text.substring(0, p) + evaluate(expr, model) + evaluateText(text.substring(p2 + 1), model);
    };
    
    function transform(template, model) {
        if (typeof template === "string")
            return evaluateText(template, model);
            
        var tag = Object.keys(template)[0];
        return '<' + tag + '>' + transform(template[tag], model) + '</' + tag + '>';
    };

    return {
        transform: transform
    };
})();

if (typeof window === 'undefined') {
	module.exports = simplejsonhtml;
}

