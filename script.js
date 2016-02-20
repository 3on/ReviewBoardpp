function giphyction () {
    var editors = document.querySelector(".text-editor");
}

function buttonClickHandler (evt) {
    var filename = evt.currentTarget.previousElementSibling.previousElementSibling.innerText;
    var input = document.createElement("input");
    input.setAttribute("value", filename);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

function pathTify (path) {
    var th = path.firstElementChild;
    var pathName = th.firstElementChild.innerText;
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("value", "copy");
    button.classList.add("rbpp_copy-button", "btn");
    button.addEventListener("click", buttonClickHandler);

    var svg = document.createElement("img");
    svg.setAttribute("src", chrome.extension.getURL("img/clippy.svg"));

    button.appendChild(svg);
    th.appendChild(button);
}

function pastetifyReview (review) {
    var paths = review.querySelectorAll(".sidebyside .filename-row");
    for (var i = 0; i < paths.length; i++) {
        var path = paths.item(i);
        // Make sure we only ad the button once
        if (path.querySelectorAll(".rbpp_copy-button").length) {
            continue;
        }
        pathTify(path);
    }
}

function reviewMouseenterHandler (evt) {
    pastetifyReview(evt.currentTarget);
}

function pasteTification() {
    var reviews = document.querySelectorAll(".review");
    for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        review.addEventListener('mouseenter', reviewMouseenterHandler);
    }
}

//giphyction();
pasteTification();