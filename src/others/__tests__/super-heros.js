import {getFlyingSuperHeros} from '../super-heros'

test('returns returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toMatchInlineSnapshot(`
    [
      {
        "name": "Dynaguy",
        "powers": [
          "disintegration ray",
          "fly",
        ],
      },
      {
        "name": "Apogee",
        "powers": [
          "gravity control",
          "fly",
        ],
      },
      {
        "name": "Jack-jack",
        "powers": [
          "shapeshifting",
          "fly",
        ],
      },
    ]
  `)
})
