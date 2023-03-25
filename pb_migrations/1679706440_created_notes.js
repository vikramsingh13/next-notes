migrate((db) => {
  const collection = new Collection({
    "id": "v59wg5zrmv18e7d",
    "created": "2023-03-25 01:07:20.405Z",
    "updated": "2023-03-25 01:07:20.405Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5oc63ria",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "usvwpnf7",
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
  const collection = dao.findCollectionByNameOrId("v59wg5zrmv18e7d");

  return dao.deleteCollection(collection);
})
