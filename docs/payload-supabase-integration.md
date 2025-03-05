# Rion Wildlife Safaris: Headless CMS Implementation Plan

## Architecture Overview

This document outlines the implementation plan for a headless CMS solution for Rion Wildlife Safaris using:

- **Payload CMS**: Content management system with admin interface
- **Supabase PostgreSQL**: Database backend
- **Supabase Storage**: Media file storage and delivery
- **Vercel**: Hosting platform for frontend and Payload API

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Payload CMS    │────▶│  React Frontend │◀────│    End Users    │
│  Admin Panel    │     │                 │     │                 │
│                 │     └────────┬────────┘     └─────────────────┘
└────────┬────────┘              │
         │                       │
         ▼                       ▼
┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │
│    Supabase     │     │    Supabase     │
│   PostgreSQL    │     │     Storage     │
│                 │     │                 │
└─────────────────┘     └─────────────────┘
```

## Technology Stack

- **Frontend**: React/Next.js with TypeScript and TailwindCSS
- **CMS**: Payload CMS
- **Database**: Supabase PostgreSQL
- **File Storage**: Supabase Storage
- **Hosting**: Vercel (hobby plan)
- **Package Manager**: pnpm

## Implementation Steps

### 1. Set Up Supabase Project

1. Create a new Supabase project
2. Set up PostgreSQL database
3. Create storage buckets:
   - `safari-images`: For tour and activity images
   - `hero-images`: For hero section backgrounds
   - `testimonials`: For client testimonial photos
4. Set up appropriate storage policies

### 2. Install and Configure Payload CMS

```bash
# Create Next.js app if not already created
pnpm create next-app --typescript

# Install Payload CMS and PostgreSQL adapter
pnpm add payload @payloadcms/db-postgres

# Install Supabase client
pnpm add @supabase/supabase-js
```

### 3. Payload Configuration

Create `payload.config.ts`:

```typescript
import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';

// Import collections
import Tours from './collections/Tours';
import Activities from './collections/Activities';
import Facilities from './collections/Facilities';
import Testimonials from './collections/Testimonials';
import MediaLibrary from './collections/MediaLibrary';

export default buildConfig({
  admin: {
    user: 'User',
    meta: {
      titleSuffix: '- Rion Wildlife Safaris',
      favicon: '/favicon.ico',
      ogImage: '/images/logo.png',
    },
  },
  collections: [
    Tours,
    Activities,
    Facilities,
    Testimonials,
    MediaLibrary,
    // Other collections
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.SUPABASE_DATABASE_URL,
    },
  }),
  upload: {
    // Configure Supabase storage adapter for uploads
  }
});
```

### 4. Content Modeling

#### Collections

1. **Tours Collection**

```typescript
// collections/Tours.ts
import { CollectionConfig } from 'payload/types';

const Tours: CollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'days',
      type: 'number',
      required: true,
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'galleryImages',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'number',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Tours;
```

2. **Activities Collection**

```typescript
// collections/Activities.ts
import { CollectionConfig } from 'payload/types';

const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        {
          label: 'Wildlife',
          value: 'wildlife',
        },
        {
          label: 'Desert',
          value: 'desert',
        },
        {
          label: 'Culture',
          value: 'culture',
        },
        {
          label: 'Camera',
          value: 'camera',
        },
        {
          label: 'River',
          value: 'river',
        },
        {
          label: 'Waterfall',
          value: 'waterfall',
        },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Activities;
```

3. **Facilities Collection**

```typescript
// collections/Facilities.ts
import { CollectionConfig } from 'payload/types';

const Facilities: CollectionConfig = {
  slug: 'facilities',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        {
          label: 'Accommodation',
          value: 'accommodation',
        },
        {
          label: 'Safari Vehicle',
          value: 'safari-vehicle',
        },
        {
          label: 'Guide',
          value: 'guide',
        },
        {
          label: 'Food',
          value: 'food',
        },
      ],
      required: true,
    },
  ],
};

export default Facilities;
```

4. **MediaLibrary Collection**

```typescript
// collections/MediaLibrary.ts
import { CollectionConfig } from 'payload/types';

const MediaLibrary: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
};

export default MediaLibrary;
```

### 5. Supabase Storage Integration for Payload

Create a custom storage adapter for Payload to use Supabase:

```typescript
// utilities/supabaseStorage.ts
import { Storage } from '@payloadcms/plugin-cloud-storage/types';
import { createClient } from '@supabase/supabase-js';

export const supabaseStorage = (): Storage => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  return {
    async upload({ file, filename }) {
      const { data, error } = await supabase.storage
        .from('safari-images')
        .upload(`uploads/${filename}`, file);

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from('safari-images')
        .getPublicUrl(`uploads/${filename}`);

      return {
        filename,
        url: urlData.publicUrl,
      };
    },
    async delete({ filename }) {
      const { error } = await supabase.storage
        .from('safari-images')
        .remove([`uploads/${filename}`]);

      if (error) throw error;
      return;
    },
  };
};
```

### 6. Integrating Payload with Next.js

Create API route for Payload in Next.js:

```typescript
// pages/api/[...payload].ts
import { nextHandler } from 'payload/next';
import payload from 'payload';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Payload
if (process.env.NODE_ENV !== 'production') {
  payload.init();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await nextHandler(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
```

### 7. Fetching Data from Payload in Frontend

Example of fetching tours data:

```typescript
// pages/tours.tsx
import { GetStaticProps } from 'next';
import { payload } from 'payload';

export const getStaticProps: GetStaticProps = async () => {
  const { docs: tours } = await payload.find({
    collection: 'tours',
    limit: 100,
  });

  return {
    props: {
      tours,
    },
    revalidate: 60, // ISR: revalidate every 60 seconds
  };
};

const ToursPage = ({ tours }) => {
  return (
    <div>
      <h1>Tours</h1>
      <div className="grid grid-cols-3 gap-4">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
```

### 8. Environment Configuration

Create `.env` file:

```
PAYLOAD_SECRET=your-payload-secret-key
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_DATABASE_URL=your-postgres-connection-string
```

### 9. Deployment to Vercel

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy the application

## User Access Management

1. **Admin User**: Professor Rion Haraeb (full access)
2. **Editor Role**: For staff to update tour information
3. **Viewer Role**: For viewing analytics and feedback

## Data Migration Plan

1. Extract current hardcoded data from:
   - `src/pages/Activities.tsx`
   - `src/pages/Tours.tsx`
   - Other relevant components

2. Transform data to Payload collection format

3. Import into Payload CMS using API or direct database import

## Timeline

1. **Week 1**: Set up Supabase and basic Payload configuration
2. **Week 2**: Create collections and content models
3. **Week 3**: Integrate frontend with Payload API
4. **Week 4**: Testing, data migration, and deployment

## Maintenance and Future Considerations

1. **Backups**: Scheduled PostgreSQL backups
2. **Scaling**: Monitor usage of free tiers, upgrade as needed
3. **Performance**: Implement caching for frequently accessed data
4. **Features**: Consider adding booking functionality in the future

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs/getting-started/what-is-payload)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs) 