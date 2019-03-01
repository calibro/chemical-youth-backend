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
      name: 'streetviewCoordinates',
      title: 'Street Coordinates',
      type: 'geopoint'
    },
    {
      name: 'streetviewHead',
      title: 'Street View Head',
      type: 'number'
    },
    {
      name: 'streetviewPitch',
      title: 'Street View Pitch',
      type: 'number'
    },
    {
      name: 'streetviewZoom',
      title: 'Street View Zoom',
      type: 'number'
    }
  ]
};
