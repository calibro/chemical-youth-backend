export default {
  name: 'internalresource',
  title: 'Document Resource',
  type: 'document',
  fields: [{
      name: 'name',
      title: 'Name',
      type: 'string'
    }, {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{
        type: 'resourcecategory'
      }]
    },
    {
      title: 'Document',
      name: 'document',
      type: 'file'
    },
    {
      name: 'private',
      title: 'Private Document',
      type: 'boolean'
    }
  ]
}