FROM node:latest

ARG RAILS_ROOT=/app
RUN mkdir -p $RAILS_ROOT
WORKDIR $RAILS_ROOT

COPY . $RAILS_ROOT

ENV PATH=$RAILS_ROOT/bin:${PATH}

CMD /bin/bash -c "node /app/app/app.js"
