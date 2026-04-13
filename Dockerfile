# ============================================================
# Dockerfile — The Leaky Tap Website
# Uses nginx:alpine to serve the static site
# ============================================================

FROM nginx:alpine

LABEL maintainer="Your Name <you@example.com>"
LABEL description="The Leaky Tap – Fan website for Critical Role's fictional tavern in Zadash"

# Copy custom nginx config FIRST (before clearing html dir)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only web assets (not Dockerfile, nginx.conf, .github, etc.)
COPY index.html /usr/share/nginx/html/
COPY css/       /usr/share/nginx/html/css/
COPY js/        /usr/share/nginx/html/js/

# Expose port 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
