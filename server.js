function login() {
    uname = document.getElementById('uname').value;
    pass = document.getElementById('pass').value;
    localStorage.setItem('name',uname)
    if (uname == '' || pass == '' || pass < 8 || uname <10) {
        alert('⚠ Error while logging-in!\n1. Must Fill the required input.\n2. Username max contain 10 words or use a nick name.\n3. Password must contain atleast 6 characters.')
    }
    if (uname == 'Laxmi' && pass == 'svm08!') {
        localStorage.setItem('name','Laxmi')
        localStorage.setItem('role','Teacher')
        localStorage.setItem('badge','Admin')
    }
    else{
        window.location.replace('home.html')
    }
}
document.getElementById('name').innerHTML = localStorage.getItem('name')
