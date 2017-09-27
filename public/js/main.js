window.onload = function() {
  initUI();
};

var initUI = function() {
  new Granim({
    element: '#canvas-background',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ABDCFF', '#0396FF'],
                ['#81FBB8', '#28C76F'],
                ['#5EFCE8', '#736EFE']
            ]
        }
    }
});
};