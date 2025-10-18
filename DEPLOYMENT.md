# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest - 2 minutes)

1. **Push to GitHub** (if not already done):
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)
   - Your site will be live in ~1 minute

3. **Get Your Live URL**:
   - Vercel will provide a URL like: `your-project.vercel.app`
   - Share this with the recruiter!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy"

## Testing Your Deployment

After deployment, test these features:
- ✅ Video player loads and plays
- ✅ Sticky video works on mobile (use mobile device or dev tools)
- ✅ All navigation buttons work
- ✅ Popups open correctly (Quiz, Leaderboard, Ask Question, PDF)
- ✅ Comments section displays properly
- ✅ Arabic text shows correctly in leaderboard
- ✅ Responsive design works on all screen sizes

## Environment Variables

This project doesn't require any environment variables for basic functionality.

## Custom Domain (Optional)

If you want to add a custom domain:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's DNS instructions

## Troubleshooting

### Build Fails
- Run `npm run build` locally first to catch errors
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (18.x or higher)

### Videos/Images Not Loading
- Make sure all files are in the `public` folder
- Check file paths start with `/` (e.g., `/video.mp4`)
- Verify files are committed to git

### Fonts Not Loading
- Fonts from Google Fonts should load automatically
- Check that `layout.tsx` has the font imports

## Performance Tips

Your deployment is already optimized with:
- ✅ Next.js Image optimization
- ✅ Static page generation
- ✅ Turbopack for faster builds
- ✅ Minimal JavaScript bundle size

## Sharing Your Project

Once deployed, share with the recruiter:

📧 **Email Template**:
```
Subject: Course Details Page - Next.js Application Submission

Hi [Recruiter Name],

I've completed the course details page assignment. Here are the links:

🌐 Live Demo: https://your-project.vercel.app
📦 GitHub Repo: https://github.com/your-username/your-repo

Key features implemented:
- Sticky video player (mobile only)
- Interactive quiz system with timer
- PDF viewer popup
- Arabic language support
- Fully responsive design
- All navigation and popup features

Tech stack: Next.js 15, TypeScript, Tailwind CSS v4, Headless UI

Feel free to test on both desktop and mobile devices!

Best regards,
[Your Name]
```

## Next Steps After Deployment

1. ✅ Test all features on the live site
2. ✅ Test on mobile device (real phone, not just dev tools)
3. ✅ Check browser console for any errors
4. ✅ Verify all images and videos load
5. ✅ Share the link with confidence!

---

**Pro Tip**: Vercel automatically deploys updates when you push to GitHub. Make any last-minute fixes, push, and they go live instantly!

