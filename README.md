## Deployed using DigitalOcean

[https://dgm-4790-node-app-53t8z.ondigitalocean.app/fossils](https://dgm-4790-node-app-53t8z.ondigitalocean.app/fossils)

*Takes a while for fossils to load in

You can delete and edit each fossil

### Delete
```javascript
  const handleDelete = async () => {
    setDeleteOpen(false);
    console.log(selectedFossil._id);
    try {
      await axios.delete(`http://localhost:${PORT}/fossil/delete`, {
        data: {
          fossilId: selectedFossil._id,
        },
      });
      fetchFossils();
    } catch (err) {
      console.error(err);
    }
  };
```

### Edit

```javascript
  const handleUpdate = async (values) => {
    try {
      const result = await axios.put(`http://localhost:${PORT}/fossil/update`, {
        data: {
          fossilId: values.id,
          name: values.name,
          image: values.image,
          price: values.price,
        },
      });
      if (result.status === 200) {
        fetchFossils();
      }
    } catch (err) {
      console.error(err);
    }
  };
```

### Get Endpoints

```javascript
fossilRouter.get('/', fossils)

fossilRouter.get('/id', getFossilById)

fossilRouter.get('/trex', getMostExpensiveFossil)
```

### Delete Endpoint

```javascript
fossilRouter.delete('/delete', deleteFossil)
```

### Put Endpoint

```javascript
fossilRouter.put('/update', updateFossil)
```

### Post Endpoint

```javascript
fossilRouter.post('/', postAddFossil)
```