/* 
 * Author: Harald Pehl
 */
function findRoute()
{
    var street = document.mapform.street.value;
    var zip = document.mapform.zip.value;
    var city = document.mapform.city.value;
    
    if (street == "Straße") street = "";
    if (zip    == "PLZ")    zip    = "";
    if (city   == "Ort")    city   = "";
    
    if (street == "" && zip == "" && city == "")
    {
        alert("Bitte geben Sie eine gültige Adresse ein.");
    }
    else
    {
        var from = "?";
        if (street != "")
        {
            from += street + ", ";
        }
        if (zip != "")
        {
            from += zip + " ";
        }
        if (city != "")
        {
            from += city;
        }
        window.open("route.html" + from, "route", "width=900,height=700,location=no,menubar=no,resizable=no,toolbar=no,status=no");
    }
}
