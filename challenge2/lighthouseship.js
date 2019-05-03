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

function countEssential2() {
  var count = availableModules.reduce((acc, module) => {
    if (module.essential) {
      acc++
    }
    return acc
  })
  return count

}
