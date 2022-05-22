const FORM = document.getElementById("FORM");
const loader = document.querySelector('.loader');
loader.style.display = 'none';

function loadLoader() {
    loader.style.display = 'block';
}

FORM.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(FORM);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        loader.style.display = 'none';
        window.location.href = "submited.html";
    }).catch((e) => alert("Error!", e));
});