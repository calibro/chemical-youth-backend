export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [{
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'startDate',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endDate',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'researchers',
      title: 'Researchers',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'researcher'
        }
      }]
    },
    {
      name: 'methodologies',
      title: 'Methodologies',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'methodology'
        }
      }]
    },
    {
      name: 'chemicals',
      title: 'Chemicals',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'chemical'
        }
      }]
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'topic'
        }
      }]
    },
    {
      name: 'place',
      title: 'Place',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'location'
        }
      }]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'internalResources',
      title: 'Resource Documents',
      type: 'array',
      of: [{
        type: 'internalresource',
      }]
    },
    {
      name: 'externalResources',
      title: 'Resource Links',
      type: 'array',
      of: [{
        type: 'externalresource',
      }]
    },
    {
      name: 'images',
      title: 'Image Gallery',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    },
    {
      name: 'credits',
      title: 'Photo credits',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}