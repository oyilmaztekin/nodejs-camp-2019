const queryStringHandler = require('./../queryString');

describe("testing querystring", () => {
    test("url is parsed", () => {
        const exampleURL = "http://localhost:8080/?page=2&limit=3"
        expect(queryStringHandler.parseURL(exampleURL).query).toBe("page=2&limit=3");       
    })
})