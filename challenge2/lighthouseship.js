var navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false
};

function powerOn() {
  ship.powerOn = true;
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  var count = 0;
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].essential === true) {
      count++;
    }
  }
  return count;
}

function findModule(string) {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name === string) {
      return i;
    }
  }
}

function loadModule(index) {
  var moduleToAdd = availableModules[index]
  moduleToAdd.enabled = true
  ship.modules.push(moduleToAdd)
}

loadModule(findModule('life-support'))




function countEssential2() {
  var count = availableModules.reduce((acc, module) => {
    if (module.essential) {
      acc++
    }
    return acc
  })
  return count

}
