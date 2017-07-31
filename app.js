// When numbers are clicked, the number should acculumlate
// When an operator is clicked, the operator should show on screen
// When more numbers are clickedd, number should accululate
// When equals is clicked, the total of the epression should appear
// Total should remain until the clear button is clicked

var isItOn = false;
var onOff = document.getElementById('on');
var display = document.getElementById('display');
display.textContent = '';

onOff.addEventListener('click', function(event) {
  if (isItOn === false) {
    isItOn = true;
    display.textContent = '0';
    onOff.classList.add('active');
    view.setUpEventListeners();
  } else {
    isItOn = false;
    display.textContent = '';
    model.expression = [];
    model.currentText = '';
    total = 0;
    onOff.classList.remove('active');
    document.getElementById('buttons').removeEventListener('click', eventListeners);
  }
});

function eventListeners(event) {
  var elementClicked = event.target;
  if (
    elementClicked.dataset.value === "*" ||
    elementClicked.dataset.value === "/" ||
    elementClicked.dataset.value === "-" ||
    elementClicked.dataset.value === "+" ||
    elementClicked.dataset.value === "." ||
    elementClicked.dataset.value === "0" ||
    elementClicked.dataset.value === "1" ||
    elementClicked.dataset.value === "2" ||
    elementClicked.dataset.value === "3" ||
    elementClicked.dataset.value === "4" ||
    elementClicked.dataset.value === "5" ||
    elementClicked.dataset.value === "6" ||
    elementClicked.dataset.value === "7" ||
    elementClicked.dataset.value === "8" ||
    elementClicked.dataset.value === "9") {
    controllers.createExpression(elementClicked.dataset.value);
  } else if (elementClicked.dataset.value === "=") {
    controllers.displayTotal();
  }
  if (elementClicked.dataset.value === "C") {
    controllers.clearDisplay();
  }
}

  var total = 0;
  var input1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  var input2 = ['+', '-', '/', '*'];

  var model = {
    expression: [],
    currentText: '',
    createExpression: function(buttonClicked) {
      this.expression.push(buttonClicked);
      console.log("Expression: " + this.expression);
      this.currentText = this.currentText + buttonClicked;
    },
    displayTotal: function() {
      total = this.expression.join();
      console.log("total before reduce: " + total);
      total = this.expression.reduce(function(a, b) {
        return a + b;
      });
      console.log("total before eval(): " + total);
      total = eval(total);
      console.log(total);
      this.expression = [total];
      this.currentText = total;
    },
    clearDisplay: function(buttonClicked) {
      this.expression = [];
      this.currentText = '';
      total = 0;
    }
  };

  var controllers = {
    createExpression: function(buttonClicked) {
      model.createExpression(buttonClicked);
      view.currentDisplay(buttonClicked);
    },
    displayTotal: function() {
      model.displayTotal();
      view.displayTotal();
    },
    clearDisplay: function() {
      model.clearDisplay();
      view.clearDisplay();
    }
  };

  var view = {
    currentDisplay: function(buttonClicked) {
      var display = document.getElementById('display');
      display.textContent = model.currentText;
    },
    displayTotal: function() {
      var display = document.getElementById('display');
      display.textContent = total;
    },
    clearDisplay: function() {
      var display = document.getElementById('display');
      display.textContent = 0;
    },
    setUpEventListeners: function() {
      var buttons = document.getElementById('buttons');
      var display = document.getElementById('display');

      buttons.addEventListener('click', eventListeners);
    }
  };

  // view.setUpEventListeners();
