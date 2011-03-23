function wiknifier()
{
    var fonts = '"minion-pro-1", "minion-pro-2", Palatino, Georgia, "Times New Roman", serif';

    var navColumn = document.getElementById("mw-panel");
    var header = document.getElementById("mw-head");
    var headBase = document.getElementById("mw-head-base");
    var pageBase = document.getElementById("mw-page-base");
    navColumn.parentNode.removeChild(navColumn);
    pageBase.parentNode.removeChild(pageBase);
    header.parentNode.removeChild(header);
    headBase.parentNode.removeChild(headBase);

    var firstHeading = document.getElementById("firstHeading");
    firstHeading.style.fontFamily = fonts;
    firstHeading.style.width = "900px";
    firstHeading.style.marginLeft = "5em"; //  = firstHeading.style.marginRight
    firstHeading.style.paddingTop = firstHeading.style.paddingBottom = "0.25em";
    firstHeading.style.border = "none";
    firstHeading.style.fontWeight = "bold";

    var contentBox = document.getElementById("content");
    contentBox.style.position = "relative";
    contentBox.style.margin = contentBox.style.marginTop = contentBox.style.marginRight = contentBox.style.marginBottom = contentBox.style.marginLeft = "0px";

    var bodyContent = document.getElementById("bodyContent");
    bodyContent.style.lineHeight = "1.55em";
    bodyContent.style.fontSize = "1.0em";
    bodyContent.style.fontFamily = fonts;
    bodyContent.style.border = "1px solid #ccc";
    bodyContent.style.width = "1000px";
    bodyContent.style.padding = bodyContent.style.paddingTop = bodyContent.style.paddingRight = bodyContent.style.paddingBottom = bodyContent.style.paddingLeft = "15px";
    bodyContent.style.marginLeft  = "7em"; //= bodyContent.style.marginRight
    bodyContent.style.background = "#fbfbfb";

    var wikiTables = document.getElementsByClassName("wikitable");
    for(var i = 0; i < wikiTables.length; i++)
    {
        wikiTables[i].width = "1000px";
        wikiTables[i].style.lineHeight = "1.35em";
        wikiTables[i].style.fontSize = "0.9em";
        wikiTables[i].style.fontFamily = fonts;
        wikiTables[i].style.border = "1px solid #ccc";
        wikiTables[i].style.width = "1000px";
        wikiTables[i].style.padding = wikiTables[i].style.paddingTop = wikiTables[i].style.paddingRight = wikiTables[i].style.paddingBottom = 	wikiTables[i].style.paddingLeft = "5px";
    }

    function parentDiv(element)
    {
        return (!element.parentNode || element.parentElement.tagName == "DIV") ?
            element.parentNode : parentDiv(element.parentNode);
    }

    function paragraphAdjuster(elements, margin)
    {
        for(var i = 0; i < elements.length; i++)
        {
            if(parentDiv(elements[i]) == bodyContent)
            {
                elements[i].className += (elements[i].className ? " " : "") + "hyphenate";
                elements[i].style.textAlign = "justify";
                elements[i].style.marginBottom = margin;
            }
        }
    }

    paragraphAdjuster(bodyContent.getElementsByTagName("p"), "1.0em");
    paragraphAdjuster(bodyContent.getElementsByTagName("li"), "0.5em");

    Hyphenator.run();

    var amboxes = document.getElementsByClassName("ambox");

    for(var i = 0; i < amboxes.length; i++)
    {
        amboxes[i].style.margin = "1.5em 10%";
    }

    var infoboxes = document.getElementsByClassName("infobox");

    if(infoboxes.length > 0)
    {
        infoboxes[0].style.marginTop = 0;
    }

    var refLists = document.getElementsByClassName("reflist");

    for(var i = 0; i < refLists.length; i++)
    {
        refLists[i].style["-webkit-column-width"] = "380px";
    }
}

wiknifier();
