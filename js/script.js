/* 
 * Author: Harald Pehl
 */
function GalleryEntry(smallImage, bigImage, description)
{
    this.smallImage = smallImage;
    this.bigImage = bigImage;
    this.description = description;
}

var currentIndex = -1;
var path = "bilder/gallery/";
var smallBasename = "small";
var smallExtension = ".gif";
var bigBasename = "big";
var bigExtension = ".jpg";

var descriptions = new Array(
    "Willkommen in Linden",                         //  0
    "Die Zufahrt zu unserem Hof",                   //  1
    "Unser Hof",                                    //  2
    "Das urige, typisch fr&auml;nkische Bauernhaus",//  3
    "Blick in den Garten",                          //  4
    "Blick auf die Weide",                          //  5 
    "Schlafzimmer in Wohnung 1",                    //  6
    "Fensterschmuck",                               //  7
    "Blick in den Wohnraum von Wohnung 2",          //  8
    "Blick in den Wohnraum von Wohnung 2",          //  9
    "Blick vom Schlafzimmer in Wohnung 3",          // 10
    "Blick vom Schlafzimmer in Wohnung 3",          // 11
    "Wanddekoration im Wohnung 3",                  // 12
    "Blick durch's Fachwerk in Wohnung 3",          // 13
    "Buntes Fachwerk in Wohnung 3",                 // 14
    "Blick in die K&uuml;che von Wohnung 2",        // 15
    "Eines unseren ruhigeren Haustiere",            // 16
    "Unser Kicker im Aufenthaltsraum",              // 17
    "Kleine &Uuml;bersicht der Umgebung",           // 18
    "Unsere kleinen Helfer",                        // 19
    "Unsere kleinen Helfer");                       // 20

var gallery = new Array(descriptions.length);
for (var i = 0; i < descriptions.length; i++)
{
    var small = new Image();
    small.src = path + smallBasename + i + smallExtension;
    var big = new Image();
    big.src = path + bigBasename + i + bigExtension;
    gallery[i] = new GalleryEntry(small, big, descriptions[i]);
}

function showDescription(index)
{
    if (index >= 0 && index < gallery.length)
    {
        var desc = document.getElementById("description");
        if (desc)
        {
            desc.innerHTML = gallery[index].description;
        }
    }
}

function clearDescription()
{
    var desc = document.getElementById("description");
    if (desc)
    {
        desc.innerHTML = "Bitte mit der Maus &uuml;ber eines der Bilder fahren, um eine Beschreibung zu erhalten.";
    }
}

function popup(index)
{
    if (index >= 0 && index < gallery.length)
    {
        var x = 0, y = 0;
        if (window.screenX) 
        {
            x = window.screenX;
            y = window.screenY;
        }
        else if (window.screenLeft)
        {
            x = window.screenLeft;
            y = window.screenTop;
        }
            
        currentIndex = index;
        var url = "popup.html?index=" + index;
        var pos = "left=" + (x + 10) + ",top=" + (y + 10);
        var options = pos + ",width=810,height=635,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no";
        var win = window.open(url, "popup", options);
        win.focus();
    }
}

function update()
{
    var index = getIndexFromURL();
    if (index != -1)
    {
        currentIndex = index;
        updateElements();
    }
}

function previous()
{
    currentIndex--;
    updateElements();
}

function next()
{
    currentIndex++;
    updateElements();
}

function updateElements()
{
    document.title = gallery[currentIndex].description;
    var description = document.getElementById("description");
    var previousLink = document.getElementById("previous");
    var status = document.getElementById("status");
    var nextLink = document.getElementById("next");
    var bigImage = document.getElementById("bigImage");
    
    if (description && previousLink && status && nextLink && bigImage)
    {
        description.innerHTML = gallery[currentIndex].description;
        if (currentIndex > 0)
        {
            previousLink.onclick = previous;
        }
        else
        {
            previousLink.onclick = "";
        }
        status.innerHTML = "" + (currentIndex + 1) + "/" + gallery.length;
        if (currentIndex < gallery.length - 1)
        {
            nextLink.onclick = next;
        }
        else
        {
            nextLink.onclick = "";
        }
        bigImage.src = gallery[currentIndex].bigImage.src;
    }
}

function getIndexFromURL()
{
    var index = -1;
    var query = document.location.search;
    if (query)
    {
        var pos = query.indexOf("?index=");
        if (pos != -1)
        {
            query = query.substring(7);
            index = parseInt(query);
        }
    }
    return index;
}

function checkRequired()
{
    var form = document.forms[0];
    if (!form.name.value)
    {
        alert("Bitte Namen angeben!");
        form.name.focus();
        return false;
    }
    if (!form.from.value)
    {
        alert("Bitte E-Mail angeben!");
        form.from.focus();
        return false;
    }
    return true;
}

function checkRequired()
{
    var form = document.forms[0];
    if (!form['Name'].value)
    {
        alert("Bitte Namen angeben!");
        form['Name'].focus();
        return false;
    }
    if (!form['email'].value)
    {
        alert("Bitte E-Mail angeben!");
        form['email'].focus();
        return false;
    }
    return true;
}