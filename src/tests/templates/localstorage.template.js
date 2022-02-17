const FIRST = {FIRST};
const SECOND = {SECOND};
const THIRD = {THIRD};
const FOURTH = {FOURTH};
const FIFTH = {FIFTH};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const storageMock = () => {
  let storage = {
    [FIRST]: FIRST,
    [SECOND]: SECOND,
    [THIRD]: THIRD,
    [FOURTH]: FOURTH,
    [FIFTH]: FIFTH,
  };

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: storageMock(),
  });
});

describe("localstorage", () => {
  const firstItem = FIRST + '';
  const secondItem = SECOND + '';
  const thirdItem = THIRD + '';
  const fourthItem = FOURTH + '';
  const fifthItem = FIFTH + '';

  it(`should return ${firstItem} when call getItem using ${firstItem} as parameter`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(window.localStorage.getItem(firstItem)).toBe(FIRST);
  })

  it(`should return ${secondItem} when call getItem using ${secondItem} as parameter`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(window.localStorage.getItem(secondItem)).toBe(SECOND);
  })

  it(`should return ${thirdItem} when call getItem using ${thirdItem} as parameter`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(window.localStorage.getItem(thirdItem)).toBe(THIRD);
  })

  it(`should return ${fourthItem} when call getItem using ${fourthItem} as parameter`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(window.localStorage.getItem(fourthItem)).toBe(FOURTH);
  })

  it(`should return ${fifthItem} when call getItem using ${fifthItem} as parameter`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(window.localStorage.getItem(fifthItem)).toBe(FIFTH);
  })
})