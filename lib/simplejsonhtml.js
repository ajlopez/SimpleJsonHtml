
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
        var content = template[tag];
        
        if (typeof content === 'object') {
            var html = null;
            var begin = '<' + tag;
            
            Object.keys(content).forEach(function (key) {
                if (key === 'html') {
                    html = content.html;
                    return;
                }
                
                var value = content[key];
                
                if (value === null)
                    begin += ' ' + key;
                else                
                    begin += ' ' + key + "='" + value + "'";
            });
            
            return begin + '>' + transform(html, model) + '</' + tag + '>';
        }
        
        return '<' + tag + '>' + transform(content, model) + '</' + tag + '>';
    };

    return {
        transform: transform
    };
})();

if (typeof window === 'undefined') {
	module.exports = simplejsonhtml;
}

