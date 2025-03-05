// This is a placeholder for the Tours collection configuration
// We'll implement this properly when we add Payload CMS

// Define a type to use in place of CollectionConfig until we add Payload
interface PlaceholderCollectionConfig {
  slug: string;
  admin: {
    useAsTitle: string;
    defaultColumns: string[];
    group: string;
  };
  access: {
    read: () => boolean;
  };
  fields: any[];
}

const Tours: PlaceholderCollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'duration', 'price', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Tour Title',
    },
    {
      name: 'id',
      type: 'text',
      required: true,
      label: 'Tour ID (URL slug)',
    },
    // Add other fields as needed
  ],
};

export default Tours; 