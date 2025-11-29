export function initViewSelect() {
  const viewSelectElement = document.querySelector("[data-view-select]")
  console.log(viewSelectElement); /*can see select.select__select in Console*/

  viewSelectElement.addEventListener("change", (event) => {
    viewSelectElement.dispatchEvent(new CustomEvent("view-change", {
      detail: {
        view: viewSelectElement.value
      },
      bubbles: true
    }))
  })
}