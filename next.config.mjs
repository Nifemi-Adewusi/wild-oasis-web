/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // Google OAuth images

    remotePatterns: [
      {
        protocol: "https",
        hostname: "magvjnsrhwpghodbgpqc.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
