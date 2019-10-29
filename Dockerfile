FROM nginx:alpine
LABEL author="4lch4"

# Nginx Configs
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY ./dist .

# WORKDIR  /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html/

# Expose the ports we need and setup the ENTRYPOINT w/ the default argument
# to be pass in.
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
