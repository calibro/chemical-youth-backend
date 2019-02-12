export default {
  name: 'externalresource',
  title: 'Link Resource',
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
      title: 'Link URL',
      name: 'linkUrl',
      type: 'url'
    }
  ]
}