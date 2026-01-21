FROM nginx:alpine

# Copy the static assets to the Nginx html directory
# We assume the context is the project root on the deploying machine, 
# but for the remote build we will arrange files such that 'public' is the folder.
COPY public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Fix permissions so nginx user can read files
RUN chmod -R 755 /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
