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

function replaceInObj(obj) {
  for (const key in obj) {
      if (obj[key] != null && typeof obj[key] === 'object') {
        replaceInObj(obj[key]);
      } else if ([0, 1].includes(obj[key])) {
        obj[key] ^= 1;
      }
  }
  return obj;
}

const showResult = () => console.log(replaceInObj(d))
showResult();