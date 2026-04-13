# ============================================================
# Dockerfile — The Leaky Tap Website
# Uses nginx:alpine to serve the static site
# ============================================================

FROM nginx:alpine

LABEL maintainer="Your Name <you@example.com>"
LABEL description="The Leaky Tap – Fan website for Critical Role's fictional tavern in Zadash"

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy site files
COPY . /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
