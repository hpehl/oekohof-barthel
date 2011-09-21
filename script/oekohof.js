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