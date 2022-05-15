async function fetchProductData(selectedTreeNode) {
    // Do something here...

    let selectedElement = document.querySelector(`#${selectedTreeNode.id}`);

    let spinner = document.createElement("div");
    spinner.classList.add("spinner-border", "text-primary", "ms-2");
    spinner.role = "status";

    selectedElement.insertBefore(spinner, selectedElement.querySelector(".treejs-label").nextElementSibling);
    lastSelectedElement = selectedElement;
    lastSpinner = spinner;

    await delay(1000);

    if (lastSelectedElement) {
        let checkIcon = document.createElement("i");
        checkIcon.classList.add("bi", "bi-check", "ms-2");

        lastSelectedElement.removeChild(lastSpinner);
        lastSelectedElement.insertBefore(checkIcon, lastSelectedElement.querySelector(".treejs-label").nextElementSibling);
    }
}