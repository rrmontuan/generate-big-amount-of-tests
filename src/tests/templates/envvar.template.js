const FIRST = {FIRST};
const SECOND = {SECOND};
const THIRD = {THIRD};
const FOURTH = {FOURTH};
const FIFTH = {FIFTH};

const OLD_ENV = process.env;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

beforeAll(() => {
  console.log({process: process.env})
  process.env = { ...OLD_ENV };
  process.env.FIRST = FIRST;
  process.env.SECOND = SECOND;
  process.env.THIRD = THIRD;
  process.env.FOURTH = FOURTH;
  process.env.FIFTH = FIFTH;
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe("localstorage", () => {
  const firstItem = FIRST + '';
  const secondItem = SECOND + '';
  const thirdItem = THIRD + '';
  const fourthItem = FOURTH + '';
  const fifthItem = FIFTH + '';

  it(`should return ${firstItem} when we get process.env.FIRST`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(process.env.FIRST).toBe(FIRST);
  })

  it(`should return ${secondItem} when we get process.env.SECOND`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(process.env.SECOND).toBe(SECOND);
  })

  it(`should return ${thirdItem} when we get process.env.THIRD`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(process.env.THIRD).toBe(THIRD);
  })

  it(`should return ${fourthItem} when we get process.env.FOURTH`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(process.env.FOURTH).toBe(FOURTH);
  })

  it(`should return ${fifthItem} when we get process.env.FIFTH`, async () => {
    await new Promise(r => setTimeout(r, getRandomInt(1000, 2000)));
    expect(process.env.FIFTH).toBe(FIFTH);
  })
})