migrate((db) => {
  const collection = new Collection({
    "id": "nazlczi0m8cyr0n",
    "created": "2023-03-24 22:57:33.602Z",
    "updated": "2023-03-24 22:57:33.602Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g7bstygf",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wcdptwxb",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 200,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nazlczi0m8cyr0n");

  return dao.deleteCollection(collection);
})
