export default {
  name: 'specialProject1',
  title: 'Special Project 1',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'images',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint'
    },
    {
      name: 'stringCoordinates',
      title: 'String Coordinates',
      type: 'string'
    },
    {
      name: 'streetviewUrl',
      title: 'Street View Url',
      type: 'string'
    }
  ]
};
