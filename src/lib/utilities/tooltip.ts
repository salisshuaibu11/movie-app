export function tooltip(element: any) {
  let div: any;
  let title: any;

  function mouseOver(event: any) {
    title = element.getAttribute('title');
    element.removeAttribute('title');

    div = document.createElement('div');
    div.textContent = title;

    div.style = `
      border: 1px solid #ddd;
      box-shadow: 1px 1px 1px #ddd;
      background: white;
      border-radius: 4px;
      padding: 4px;
      position: absolute;
      top: ${event.pageX + 5}px;
      left: ${event.pageY + 5}px;
    `;
    document.body.appendChild(div);
  }

  function mouseMove(event: any) {
    div.style.left = `${event.pageX + 5}px`;
    div.style.top = `${event.pageX + 5}px`;
  };

  function mouseLeave() {
    document.body.removeAttribute(div);
    element.setAttribute('title', title);
  };

  element.addEventListener('mouseover', mouseOver);
  element.addEventListener('mouseleave', mouseLeave);
  element.addEventListener('mousemove', mouseMove);

  return {
    destroy() {
      element.removeEventListener('mouseover', mouseOver);
      element.removeEventListener('mouseleave', mouseLeave);
      element.removeEventListener('mousemove', mouseMove);
    }
  }
}