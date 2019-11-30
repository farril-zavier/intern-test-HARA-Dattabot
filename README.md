# REST API for Soil Data
Rest API untuk Intern Test HARA/Dattabot

Base url : [`http://localhost:3000`]

API List:
* [getAllSoilData](#getAllSoilData)
* [findSoilByDate](#findSoilByDate)
* [findSoilById](#findSoilById)
* [createSoilData](#createSoilData)
* [updateSoilData](#updateSoilData)
* [deleteSoilData](#deleteSoilData)

## getAllSoilData

Returns list of all soil data

**URL** : [`http://localhost:3000/soil`]
(http://localhost:3000/soil)

**Method** : `GET`

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "id": 1,
            "date": "2019-11-25T17:00:00.000Z",
            "time": "01:00:00",
            "temp": 20,
            "ph": 5,
            "moisture": 43
        },
        {
            "id": 2,
            "date": "2019-11-25T17:00:00.000Z",
            "time": "04:00:00",
            "temp": 20,
            "ph": 5.1,
            "moisture": 42
        }
    ]
}
```

## findSoilByDate

Returns list of soil data based on date

**URL** : [`http://localhost:3000/soil/search-by-date/:date`]
(http://localhost:3000/soil/search-by-date/2019-11-27)(http://localhost:3000/soil/search-by-date/2019-11-27)

**Method** : `GET`

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "id": 9,
            "date": "2019-11-26T17:00:00.000Z",
            "time": "01:00:00",
            "temp": 22,
            "ph": 5.5,
            "moisture": 43
        },
        {
            "id": 10,
            "date": "2019-11-26T17:00:00.000Z",
            "time": "04:00:00",
            "temp": 22,
            "ph": 5.7,
            "moisture": 42
        }
    ]
}
```

## findSoilById

Returns soil data based on ID

**URL** : [`http://localhost:3000/soil/search-by-id/:id`]
(http://localhost:3000/soil/search-by-id/1)

**Method** : `GET`

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": [
        {
            "id": 1,
            "date": "2019-11-25T17:00:00.000Z",
            "time": "01:00:00",
            "temp": 20,
            "ph": 5,
            "moisture": 43
        }
    ]
}
```

## createSoilData

Adds soil data to database

**URL** : [`http://localhost:3000/soil`]

**Method** : `POST`

**Header** : `Content-Type: application/json`

**Body Param** :
```json
{
	"date": "2019-11-27",
    "time": "23:00",
    "temp": 21,
    "ph": 6.2,
    "moisture": 39
}
```

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": "Berhasil menambahkan data soil!"
}
```

### Failed Response

```json
{
    "status": 400,
    "message": "Bad Request",
    "error": {
        "code": "ER_XYZ",
        "errno": 123,
        "sqlMessage": "An SQL error message",
        "sqlState": "ABC123",
        "index": 0,
        "sql": "An SQL query"
    }
}
```

## updateSoilData

Update existing soil data

**URL** : [`http://localhost:3000/soil`]

**Method** : `PUT`

**Header** : `Content-Type: application/json`

**Body Param** :
```json
{
	"id": 17,
	"date": "2019-11-30",
    "time": "1:00",
    "temp": 22,
    "ph": 6.4,
    "moisture": 38
}
```

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": "Berhasil merubah data soil!"
}
```

### Failed Response

```json
{
    "status": 400,
    "message": "Bad Request",
    "error": {
        "message": "0 rows affected: Invalid ID in request body",
        "sql": "An SQL query"
    }
}
```

## deleteSoilData

Delete existing soil data

**URL** : [`http://localhost:3000/soil`]

**Method** : `DELETE`

**Header** : `Content-Type: application/json`

**Body Param** :
```json
{
	"id": 17
}
```

### Success Response

```json
{
    "status": 200,
    "message": "success",
    "result": "Berhasil menghapus data soil!"
}
```

### Failed Response

```json
{
    "status": 400,
    "message": "Bad Request",
    "error": {
        "message": "0 rows affected: Invalid ID in request body",
        "sql": "An SQL query"
    }
}
```