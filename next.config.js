/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["m.media-amazon.com", "lh3.googleusercontent.com", "https://m.stripe.network"],
  },
  env:{
    stripe_secret:process.env.STRIPE_SECRET_KEY,
    stripe_webhook_secret:process.env.STRIPE_WEBHOOK_SECRET
  }
};

module.exports = nextConfig;
