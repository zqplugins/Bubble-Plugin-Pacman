function(instance, properties, context) {
  const target = instance.canvas.get(0);
  const element = RCDReact.createElement(Pacman);
  RCDReactDOM.render(element, target);
}