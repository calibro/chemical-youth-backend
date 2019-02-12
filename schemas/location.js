export default {
  name: 'location',
  type: 'document',
  fields: [{
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [{
        type: 'country'
      }]
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
    },
    {
      name: 'zoom',
      title: 'Zoom',
      type: 'number'
    }
  ]
}