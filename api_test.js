let assert = require('assert');

Feature('api');

Scenario('get without auth with query in path', async (I) => {
const page = "";
const query = "quality";
    let r = await I.sendGetRequest( `https://api.itbook.store/1.0/search/${query}/${page}`);
    assert.equal(r.status, 200);
    assert.equal(r.data.total, 274);
    });
