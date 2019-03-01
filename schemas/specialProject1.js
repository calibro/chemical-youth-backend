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
      title: 'StreetView Coordinates',
      type: 'geopoint'
    },
    {
      name: 'streetviewHead',
      title: 'StreetView Head',
      type: 'number'
    },
    {
      name: 'streetviewPitch',
      title: 'StreetView Pitch',
      type: 'number'
    },
    {
      name: 'streetviewZoom',
      title: 'StreetView Zoom',
      type: 'number'
    }
  ]
};
