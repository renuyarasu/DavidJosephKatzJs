console.clear();
// JavaScript Cookies

function writeCookie() {
    if (document.myform.customer.value == '') {
        alert('Enter Same Value');
        return
    }
    let cookievalue = escape(document.myform.customer.value) + ';';
    document.cookie = 'name' + cookievalue;
    console.log('Setting Cookie: ' + 'Name = ' + cookievalue);
}