# syntax=docker/dockerfile:1
ARG VOLTO_VERSION
FROM plone/frontend-builder:${VOLTO_VERSION} as builder

COPY --chown=node packages/volto-procergs-siteplone /app/packages/volto-procergs-siteplone
COPY --chown=node volto.config.js /app/
COPY --chown=node package.json /app/package.json.temp

RUN --mount=type=cache,id=pnpm,target=/app/.pnpm-store,uid=1000 <<EOT
     python3 -c "import json; data = json.load(open('package.json.temp')); deps = data['dependencies']; data['dependencies'].update(deps); json.dump(data, open('package.json', 'w'), indent=2)"
     rm package.json.temp
     pnpm install && pnpm build:deps
     pnpm build
     pnpm install --prod
EOT

FROM plone/frontend-prod-config:${VOLTO_VERSION}

LABEL maintainer="PROCERGS <sites@procergs.rs.gov.br>" \
      org.label-schema.name="siteplone-frontend" \
      org.label-schema.description="Site Plone frontend image." \
      org.label-schema.vendor="PROCERGS"

COPY --from=builder /app/ /app/
