function customrender(reactelement, container) {
  /*
  let create = document.createElement(reactelement.type);
  create.setAttribute("href", reactelement.props.href);
  create.setAttribute("target", reactelement.props.target);
  create.innerHTML = reactelement.children;
  container.appendChild(create);
*/

  const domElement = document.createElement(reactelement.type);
  domElement.innerHTML = reactelement.children;
  for (const key in reactelement.props) {
    if (key == "children") {
      continue;
    }

    domElement.setAttribute(key, reactelement.props[key]);
  }
  container.appendChild(domElement);
}
const reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

// in react or vite bundler convert this into a component

const maindiv = document.getElementById("root");

customrender(reactelement, maindiv);
