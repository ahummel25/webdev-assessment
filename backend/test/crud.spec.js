const axios = require('axios')

describe('the cats api', () => {

  let catRecord

  jest.setTimeout(10000);

  const baseUrl = 'http://localhost:8080/cats'

  describe('basic CRUD', () => {

    test('POST to /cats creates an object, and returns the created object with a generated id', async () => {
      let newCat = {name: 'Mittens'}
      let response = await axios.post(baseUrl, newCat)
      expect(response.data.id).toBeDefined()
      expect(response.data.name).toEqual(newCat.name)
      catRecord = response.data
    })

    test('GET to /cats/:id returns the same object created from the POST request when called with the generated id', async () => {
      let response = await axios.get(`${baseUrl}/${catRecord.id}`)
      expect(response.data.id).toEqual(catRecord.id)
      expect(response.data.name).toEqual(catRecord.name)
    })

    test('PUT to /cats/:id updates the record identified by :id', async () => {
      let updatedCat = {id: catRecord.id, name: 'Mittens II'}
      let response = await axios.put(`${baseUrl}/${catRecord.id}`, updatedCat)
      expect(response.data.id).toEqual(catRecord.id)
      expect(response.data.name).toEqual(updatedCat.name)
      catRecord = response.data
    })

    test('DELETE to /cats/:id removes the record', async () => {
      let response = await axios.delete(`${baseUrl}/${catRecord.id}`)
      expect(response.status).toEqual(204)

      try {
        await axios.get(`${baseUrl}/${catRecord.id}`)
      } catch(err) {
        expect(err.response.status).toEqual(404)
      }
    })

  })

})
