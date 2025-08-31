# 🚀 Vercel Deployment Guide

## Prerequisites
- [Vercel account](https://vercel.com/signup)
- [GitHub account](https://github.com)
- Your project pushed to GitHub

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js framework
4. Configure environment variables if needed
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts
```

## Environment Variables

### Required (if using Firebase)
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### Recommended for Production
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Optional
```bash
NODE_ENV=production
```

## Build Configuration

Your project is already configured for Vercel with:
- ✅ `vercel.json` - Deployment settings
- ✅ `next.config.js` - Next.js optimization
- ✅ `.gitignore` - Proper file exclusions
- ✅ TypeScript support
- ✅ Tailwind CSS optimization
- ✅ Custom 404 and error pages
- ✅ SEO metadata configuration

## Performance Features

- **Image Optimization**: WebP and AVIF formats
- **CSS Optimization**: Automatic CSS optimization
- **Security Headers**: XSS protection, frame options
- **Caching**: Static assets cached for 1 year
- **Error Handling**: Custom 404 and error pages

## Deployment Regions

Configured for **Mumbai (BOM1)** region for optimal performance in India.

## Post-Deployment

1. **Test your site** thoroughly
2. **Check Core Web Vitals** in Vercel Analytics
3. **Monitor performance** in Vercel Dashboard
4. **Set up custom domain** if needed
5. **Update NEXT_PUBLIC_SITE_URL** with your actual domain

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Variables
- Ensure all required env vars are set in Vercel Dashboard
- Check for typos in variable names
- Update NEXT_PUBLIC_SITE_URL after getting your Vercel domain

### Performance Issues
- Use Vercel Analytics to identify bottlenecks
- Optimize images and assets
- Check bundle analyzer in build logs

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
