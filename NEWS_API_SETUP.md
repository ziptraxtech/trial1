# NewsAPI Setup Guide - Get Live Tax & Compliance Updates

The NotificationBar now fetches live tax and compliance news from NewsAPI!

## Quick Setup (3 Steps)

### Step 1: Get Your Free API Key

1. Go to https://newsapi.org/register
2. Sign up with your email (free account gives 100 requests/day)
3. Verify your email
4. Copy your API key from the dashboard

### Step 2: Add API Key to Your Project

Create a `.env` file in the project root:

```bash
# In terminal, at project root:
touch .env
```

Then add your API key to the `.env` file:

```env
VITE_NEWS_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with your actual API key from NewsAPI.

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

That's it! The news updates will now fetch live articles.

## How It Works

- **Automatic Fetching**: Gets latest news when notification panel opens
- **Smart Queries**: Searches for "GST India", "income tax India", "CBDT", "tax compliance" etc.
- **Clickable Links**: Each news item opens the original article in a new tab
- **Fallback System**: If API fails or key is missing, shows curated fallback updates
- **Free Tier**: 100 API calls per day is more than enough for this use case

## Features

✅ Live news from 80,000+ sources worldwide
✅ Filtered for Indian tax & compliance topics  
✅ Latest articles sorted by publish date
✅ Source attribution (Economic Times, LiveMint, etc.)
✅ External link icon indicates clickable items
✅ Automatic fallback if API unavailable

## File Structure

```
project-root/
├── .env                    # Your API key (DO NOT COMMIT)
├── .env.example           # Template for others
├── .gitignore             # .env is excluded from git
└── src/
    └── components/
        └── NotificationBar.jsx  # News component
```

## Security Notes

🔒 The `.env` file is automatically excluded from git (added to `.gitignore`)
🔒 Never commit your API key to version control
🔒 If deploying, add the environment variable in your hosting platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   - Other platforms: Check their documentation for environment variables

## Troubleshooting

### No news showing?
1. Check `.env` file exists in project root
2. Verify API key is correct (no extra spaces)
3. Restart dev server after adding `.env`
4. Check browser console for errors

### "Invalid API key" error?
1. Verify you copied the full API key
2. Make sure email is verified on NewsAPI
3. Check if you've exceeded 100 requests/day limit

### Still using fallback updates?
- This means API key isn't configured yet
- Follow Step 2 above to add your key
- The fallback updates are intentional - they ensure the feature always works!

## Advanced: Production Deployment

When deploying to production:

1. **Vercel/Netlify**: Add `VITE_NEWS_API_KEY` in environment variables
2. **Environment specific keys**: Use different keys for dev/prod
3. **Rate limiting**: Monitor your usage at https://newsapi.org/account

## Alternative Free APIs

If you prefer other news sources:

- **GNews API**: https://gnews.io/ (100 req/day)
- **NewsData.io**: https://newsdata.io/ (200 req/day)
- **MediaStack**: https://mediastack.com/ (500 req/month free)

To switch APIs, modify the `fetchNews` function in `NotificationBar.jsx`.

---

**Questions?** Check the NewsAPI documentation at https://newsapi.org/docs
