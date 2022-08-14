const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

function getValues(obj) {
  getProp(obj);

  function getProp(o) {
    for (var prop in o) {
      if (typeof o[prop] === "object") {
        getProp(o[prop]);
      } else {
        console.log("Finite value: ", o[prop]);
      }
    }
  }
}
