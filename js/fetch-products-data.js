async function fetchProductData(selectedTreeNode) {
    // let iframe = document.createElement("iframe");
    // iframe.style.display = "none";

    // await fetch(selectedTreeNode.attributes.href)
    //     .then(response => response.text())
    //     .then((response) => {
    //         document.body.appendChild(iframe);
    //         iframe.contentDocument.write(response);
    //     });

    let selectedElement = document.querySelector(`#${selectedTreeNode.id}`);

    let spinner = document.createElement("div");
    spinner.classList.add("spinner-border", "text-primary", "ms-2");
    spinner.role = "status";

    selectedElement.insertBefore(spinner, selectedElement.querySelector(".treejs-label").nextElementSibling);

    await delay(1000);

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("bi", "bi-check", "ms-2");

    selectedElement.removeChild(spinner);
    selectedElement.insertBefore(checkIcon, selectedElement.querySelector(".treejs-label").nextElementSibling);
}