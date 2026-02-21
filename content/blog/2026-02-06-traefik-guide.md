---
title: "Getting Started with Traefik as a Reverse Proxy"
date: 2026-02-06
excerpt: "A beginner-friendly guide to setting up Traefik with Docker for automatic HTTPS and routing."
---

Traefik is a modern reverse proxy that integrates natively with Docker. It automatically discovers your services and can provision Let's Encrypt SSL certificates without any manual intervention.

## Why Traefik?

Unlike traditional reverse proxies like Nginx, Traefik is designed for dynamic environments. When you start a new Docker container with the right labels, Traefik automatically creates the routing rules — no config file reload needed.

## Basic Setup

The minimal setup involves running Traefik as a Docker container with access to the Docker socket. Services declare their routing rules via container labels:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.myapp.rule=Host(`myapp.example.com`)"
  - "traefik.http.routers.myapp.tls.certresolver=letsencrypt"
```

## SSL Made Easy

Traefik's ACME integration handles certificate issuance and renewal automatically. Just configure a certificate resolver and point your DNS — Traefik does the rest.
